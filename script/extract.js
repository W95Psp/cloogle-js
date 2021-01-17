// this script haclky parses Cloogle's API.dcl and translate its types
// to as TypeScript types, or more specifically, to io-ts types
// (https://github.com/gcanti/io-ts).

let fs = require('fs');

let file;
try{
    file = fs.readFileSync('API.dcl').toString();
}catch(e){
    console.error("Please download API.dcl (https://gitlab.science.ru.nl/cloogle/libcloogle/-/blob/master/Cloogle/API.dcl), and place it in `"+process.cwd()+"`");
    process.exit();
}

let all = file
    .split('\n')
    .map(s => s.trim())
    .reduce(([hd,...tl], x) =>
	x.startsWith('::') ? [[x],hd,...tl] : [[...hd,x],...tl]
	, [[]]).reverse();

// given "som{e{s{t}u}}ff}bla", returns "som{e{s{t}u}}ff"
let findClosingBracket = s => {
    let chunks = s.split(/(?=({|}))./);
    let n = 0;
    let slice = [];
    let mk = () => slice.reverse().join('');
    for(let chunk of chunks){
	n += ({'{':1,'}':-1}[chunk] || 0);
	if(n<0)
	    return mk();
	slice.push(chunk);
    };
    return mk();
};

let suffix = suffix => s => s + suffix;
let prefix = prefix => s => prefix + s;

const mkUnion = types =>
      types.length == 1
      ? types[0]
      : `t.union([\n${types.map(prefix('\t')).join(',\n')}\n])`;
const mkNullable = s => mkUnion(['t.nullType', s]);
const nullableStr = mkNullable('here').split('here')[0];
const nullableStrAfter = mkNullable('here').split('here')[1];
const isNullable = s => s.startsWith(nullableStr);
const stripNullable = s => s.slice(nullableStr.length, -nullableStrAfter.length);
const mkArray = s => `t.array(${s})`;
const mkTuple = (...s) => `t.tuple([${s.join(',')}])`;
const mkLiteral = l => `t.literal("${l}")`;
const mkMaybe = s => mkUnion([mkTuple(mkLiteral('Just'), s), mkTuple(mkLiteral('Nothing'))]);

const fst = ([a,_]) => a;
const snd = ([_,b]) => b;

let parse_type = (direct_field = false) => tn => {
    const t = tn.trim();
    const h = (...rawTypes) => mkStr => {
	const types = rawTypes.map(parse_type());
	return [mkStr(...types.map(fst)), [...new Set(types.map(snd).flat())]];
    };
    const middle = t.substr(1, t.length - 2);
    return { 'Real'  : ['t.number', []],
	     'Int'   : ['t.number', []],
	     'Float' : ['t.number', []],
	     'Bool'  : ['t.boolean', []],
	     'String': ['t.string', []]
	   }[t]
	|| ({ '?': () => h(t.substr(1))(direct_field ? mkNullable : mkMaybe),
	      '[': () => h(middle)(mkArray),
	      '(': () => h(...middle.split(','))(mkTuple)
	    }[t[0]] || (() => [t, [t]]))();
};

let gL = [];
let gL_deps = {};
let register = (name, def, deps) => {
    let sDeps = new Set(deps);
    gL_deps[name] = sDeps;
    gL.push([name, def, sDeps]);
};

let other = all.map(x => {
    let r = x.join('%').match(/^::(?:%|\s)+(\w+)(?:%|\s)*=(?:%|\s)*([^%\s{].*)$/i);
    if(!r)return null;
    let tname = r[1];
    let dependencies = new Set();
    let cons = r[2]
	.split('%')
	.map(x => x.trim())
	.filter((x,i) => i==0 || x.startsWith('|'))
	.map(x => {
	    let r = x.match(/^\|?\s*([^ ]+)\s*(.*)?$/);
	    if(!r)return null;
	    let [type, comment] = [...(r[2]||'').split(/\/(?:\/\|\*)*?/), ''];
	    let type_info = type.trim().split(' ').filter(x => x).map(parse_type());
	    type = type_info.map(fst);
	    type_info.map(snd).flat().map(x => dependencies.add(x));
	    return {name: r[1], type, comment};
	}).map(({name, type, comment}) => {
	    let tl = [mkLiteral(name), ...type].join(',');
	    return `t.tuple([${tl}])`;
	});
    register(tname, mkUnion(cons), dependencies);
});

let typeSyn = all.map(x => {
    let r = x.join(' ').match(/^::\s+(\w+)\s*:==\s*(.*)$/i);
    if(!r)return null;
    let name = r[1];
    let [type, comment] = [...r[2].split(/\/(?:\/\|\*)*?/), ''];
    type = type.replace(/!/g,'').trim();
    let [aType, deps] = parse_type()(type);
    register(name, `${aType}; // ${comment}`, deps);
});

let record2string = (kind, x) => {
    let args = x.args.filter(a=>a).map(a => '\t' + a.name +': ' + a.type + ',' + (a.comment ? ' // ' + a.comment : '')).join('\n');
    register(x.name, 't.'+kind+'({\n'+args+'\n});', x.deps);
};

let records = all.map(x => {
    let result = x.join('%').match(/^::(?:\s|%)+(\w+)(?:\s|%)*=(?:\s|%)*{(.*)$/i);
    if(!result)
	return null;
    let deps = new Set();
    let name = result[1];
    let body = findClosingBracket(result[2].split('%').join('\n')).trim();
    let args = body.split('\n').map(x => {
	let r = x.match(/^,?\s*([^\s]+)\s*::\s*(.+)$/);
	if(!r) return null;
	let name = r[1];
	let [typeraw, comment] = [...r[2].split(/\/(?:\/\|\*)*?/), ''];
	typeraw = typeraw.replace(/!/g,'').trim();
	const [type, aDeps] = parse_type(true)(typeraw);
	aDeps.map(x => deps.add(x));
	return {name, type, comment};
    }).filter(x => x);
    let optArgs = args.filter(o =>  isNullable(o.type)).map(({name, type, comment}) => ({name, type: stripNullable(type), comment}));
    let reqArgs = args.filter(o => !isNullable(o.type));
    if(optArgs.length && reqArgs.length){
	record2string('partial', {
	    name: name+'_opt', args: optArgs, deps
	});
	record2string('type', {
	    name: name+'_req', args: reqArgs, deps
	});
	register(name, 't.intersection(['+name+'_req, '+name+'_opt]);',
		 new Set([...deps, `${name}_req`, `${name}_opt`]));
    }else{
	record2string(
	    reqArgs.length ? 'type' : 'partial',
	    {
		name: name,
		args: reqArgs.length ? reqArgs : optArgs,
		deps
	    }
	);
    }
});

let order_deps = () => {
    const out = [];
    const seen = new Set();
    while (gL.length){
	let i = 0;
	while (i < gL.length) {
	    const [name] = gL[i];
	    const deps = [...gL_deps[name]].filter(dep => gL_deps[dep]);
            if (deps.every(dep => seen.has(dep))) {
		const item = gL.splice(i, 1)[0];
		seen.add(name);
		out.push(item);
            }else
		i++;
	}
    }
    return out;
};

let ordered = order_deps();

let fileTypeValidation = '../src/TypeValidation';
let fileTypes = '../src/Types';

fs.writeFileSync(`${fileTypeValidation}.ts`, `// This file was automatically generated by ../script/extract.js
import * as t from "io-ts";

${ordered.map(([name, def]) => `export const ${name} = ${def}`).join('\n\n')}
`);
fs.writeFileSync(`${fileTypes}.ts`, `// This file was automatically generated by ../script/extract.js
import * as t from "io-ts";
import * as tv from "./${fileTypeValidation}";

${ordered.map(([name, def]) => `export type ${name} = (t.TypeOf<typeof tv.${name}>)`).join('\n')}
`);

