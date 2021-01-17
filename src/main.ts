/**
 * TypeScript library for querying the [Clean](http://clean.cs.ru.nl/) language search engine, [Cloogle](https://cloogle.org/).
 * 
 * The types definition for the API are derived automatically from [the one defined in Clean by Cloogle](https://gitlab.science.ru.nl/cloogle/libcloogle/-/blob/master/Cloogle/API.dcl).
 * @packageDocumentation
 */

// imports
import fetch from 'node-fetch'
import { Errors } from "io-ts";
import { Either } from 'fp-ts/Either'
// import cloogle type validators
import * as validation from "./TypeValidation"
// import corresponding types
import * as types from "./Types"
export { validation, types }

const cloogle_url = 'https://cloogle.org/';

/**
 * given `f` and `x`, `undefined`
 * @param f - a function
 * @param x - a possibly undefined value
 * @returns `f x` if `x` defined, undefined otherwise
*/
const nmap = function <T, R>(f: (n: T) => R): (x?: T) => R | undefined {
    return x => (x === undefined ? undefined : f(x));
};

/**
 * @param prefix
 * @param str the (possibly undefined) string to be prepended with `prefix`
 * @returns either `prefix + str`, or `undefined`
*/
const prepend = (prefix: string) => nmap((x: string) => prefix + x)
const join = (s: string) => (x: string[]) => x.join(s);

/**
 * @param request an object that represent a Cloogle request 
 * @returns the endpoint to the Cloogle API for `request`
*/
export function stringifyRequest(r: types.Request): string {
    const using = nmap(join(";"))(r.using);
    // exactName, typeName, className and using are encoded directly
    // into the `str` GET parameter (see https://gitlab.science.ru.nl/cloogle/cloogle-org/-/blob/604e7e80681c5c9a99bdfba8c63867f67d6af849/frontend/api.php#L190-206)
    const name: string = r.name
        || prepend('exact ')(r.exactName)
        || prepend('type ')(r.typeName)
        || prepend('class ')(r.className)
        || prepend('using ')(using)
        || '';
    // `str` GET parameter is of the shape `name :: type to unify` 
    const txt = name + (prepend(' :: ')(r.unify) || '');
    const args = [
        ['lib', nmap(join(','))(r.libraries)],
        ['mod', nmap(join(','))(r.modules)]
    ].filter(([, def]) => def).map(([name, def]) => encodeURIComponent(<any>name) + '=' + encodeURIComponent(<any>def));
    // boolean options
    r.include_builtins && args.push('include_builtins=true');
    r.include_core && args.push('include_core=true');
    r.include_apps && args.push('include_apps=true');
    typeof r.page == 'number' && args.push('page=' + r.page);
    return ['str=' + encodeURIComponent(txt), ...args].join('&');
};

/**
 * @param parameters a string that represent the endpoint to be queried
 * @returns returns Cloogle's unprocessed, unvalidated response
*/
export async function raw_query_no_validation(parameters: string): Promise<any> {
    const response = await fetch('http://cloogle.org/api.php?' + parameters, {
        headers: { 'User-Agent': 'clean-vscode' }
    });
    return await response.json();
}
/**
 * @param parameters a string that represent the endpoint to be queried
 * @returns returns either a validation error, or a `Response` from Cloogle
 */
export async function raw_query(parameters: string): Promise<Either<Errors, types.Response>> {
    return validation.Response.decode(await raw_query_no_validation(parameters));
}

/**
 * @param parameters a `Request` object that represent the endpoint to be queried
 * @returns returns Cloogle's unprocessed, unvalidated response
 */
export async function query_no_validation(req: types.Request): Promise<any> {
    return await raw_query(stringifyRequest(req));
}

/**
 * @param parameters a `Request` object that represent the endpoint to be queried
 * @returns returns either a validation error, or a `Response` from Cloogle
 */
export async function query(req: types.Request): Promise<Either<Errors, types.Response>> {
    return await raw_query(stringifyRequest(req));
}

/**
 * @param filename a Clean filename
 * @returns returns it's module path
 */
export const modulepath_of_filename = (filename: string): string =>
    filename.replace(/\.[id]cl$/, '').replace(/\./g, '/');

/**
 * @param res a `BasicResult` object
 * @returns returns URLs to view in cloogle `res`'s _i_mplementation (icl) or _d_eclaration (dcl)
*/
export function cloogle_url_of_BasicResult(res: types.BasicResult): { icl: URL, dcl: URL } {
    let dcl = cloogle_url + 'src#'
        + encodeURIComponent(
            res.library
            + '/'
            + modulepath_of_filename(res.filename)
        );
    let icl = dcl + ';icl';
    const line = (n: number) => ";line=" + n;
    nmap((n: number) => dcl += line(n))(res.dcl_line);
    nmap((n: number) => icl += line(n))(res.dcl_line);
    return { icl: new URL(icl), dcl: new URL(dcl) };
}

/**
 * @param r - a Cloogle result
 * @returns a "short" string that sums up the information held by `r`
*/
export function string_of_Result(r: types.Result): string {
    switch (r[0]) {
        case 'FunctionResult': return r[1][1].func;
        case 'TypeResult': return r[1][1].type;
        case 'SyntaxResult':
            let s = r[1][1];
            let examples = s.syntax_examples.map(o => o.example);
            return [s.syntax_code.join(', ')].concat(examples.length ? ['> Examples: ', ...examples] : []).join('\n');
        case 'ClassResult':
            return r[1][1].class_funs.join('\n');
        case 'ModuleResult':
        case 'ABCInstructionResult': {
            let basic: types.BasicResult = r[1][0];
            return basic.name + ' (from "' + basic.modul + '")';
        }
        case 'ProblemResult': return r[1].problem_title;
    }
}

/**
 * @param r - a Cloogle response
 * @returns a list of "short" strings that sums up informations held in `r.data`
*/
export function strings_of_Response(r: types.Response): string[] {
    return r.data.map(string_of_Result);
}


