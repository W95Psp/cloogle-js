import { validation, types, query, query_no_validation, strings_of_Response, stringifyRequest } from "../src/main";
import { isRight } from "fp-ts/Either";

let color = (c: 'green' | 'red' | 'invert' | 'gray') => (x: string) => '\x1b['
    + ({ 'green': 32, 'red': 31, 'invert': 7, 'gray': 2 }[c]) + 'm' + x + '\x1b[0m';
let green = color('green')
let red = color('red')
let gray = color('gray')
let invert = color('invert')

async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function testRunner(q: types.Request, info: string) {
    console.log(invert(' Running the following query: '), info);
    console.log('API endpoint: ', stringifyRequest(q));
    console.log('Request: ', q);
    console.log('');
    let r = await query(q);
    if (isRight(r)) {
        console.log(green('Type validation was successful! Found:'));
        // console.log(gray(JSON.stringify(r.right)));
        console.log(gray(strings_of_Response(r.right).join(', ')));
        await sleep((1 + Math.random()) * 1000);
    } else {
        console.log(red('Type validation failed! Details (stderr):'));
        console.error(JSON.stringify(r));
        return;
    }
};

async function testsRunner(queries: types.Request[]) {
    let n = queries.length;
    for (let i = 0; i < n; i++)
        await testRunner(queries[i], i + '/' + n);
}

testsRunner([
    { exactName: 'svgEltSize', unify: 'a -> Int', modules: ['Text.HTML'] },
    { name: 'svgEltSize' },
    { exactName: 'bitnot' },
    { unify: 'Int -> Int -> Int' },
    { typeName: 'Result', libraries: ['libcloogle'] },
    { className: 'Monad' },
]);

