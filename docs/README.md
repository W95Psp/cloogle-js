cloogle-js / [Exports](/docs/modules.md)

# cloogle-js

TypeScript library for querying the [Clean](http://clean.cs.ru.nl/) language search engine, [Cloogle](https://cloogle.org/).

The types definition for the API are derived automatically from [the one defined in Clean by Cloogle](https://gitlab.science.ru.nl/cloogle/libcloogle/-/blob/master/Cloogle/API.dcl).

## Table of contents

### Namespaces

- [types](/docs/modules/types.md)
- [validation](/docs/modules/validation.md)

### Functions

- [cloogle\_url\_of\_BasicResult](/docs/modules.md#cloogle_url_of_basicresult)
- [modulepath\_of\_filename](/docs/modules.md#modulepath_of_filename)
- [query](/docs/modules.md#query)
- [query\_no\_validation](/docs/modules.md#query_no_validation)
- [raw\_query](/docs/modules.md#raw_query)
- [raw\_query\_no\_validation](/docs/modules.md#raw_query_no_validation)
- [string\_of\_Result](/docs/modules.md#string_of_result)
- [stringifyRequest](/docs/modules.md#stringifyrequest)
- [strings\_of\_Response](/docs/modules.md#strings_of_response)

## Functions

### cloogle\_url\_of\_BasicResult

▸ **cloogle_url_of_BasicResult**(`res`: [*BasicResult*](/docs/modules/types.md#basicresult)): *object*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`res` | [*BasicResult*](/docs/modules/types.md#basicresult) | a `BasicResult` object   |

**Returns:** *object*

Name | Type |
------ | ------ |
`dcl` | URL |
`icl` | URL |

returns URLs to view in cloogle `res`'s _i_mplementation (icl) or _d_eclaration (dcl)

Defined in: [main.ts:111](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L111)

___

### modulepath\_of\_filename

▸ `Const`**modulepath_of_filename**(`filename`: *string*): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`filename` | *string* | a Clean filename   |

**Returns:** *string*

returns it's module path

Defined in: [main.ts:104](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L104)

___

### query

▸ **query**(`req`: [*Request*](/docs/modules/types.md#request)): *Promise*<*Either*<Errors, [*Response*](/docs/modules/types.md#response)\>\>

#### Parameters:

Name | Type |
------ | ------ |
`req` | [*Request*](/docs/modules/types.md#request) |

**Returns:** *Promise*<*Either*<Errors, [*Response*](/docs/modules/types.md#response)\>\>

returns either a validation error, or a `Response` from Cloogle

Defined in: [main.ts:96](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L96)

___

### query\_no\_validation

▸ **query_no_validation**(`req`: [*Request*](/docs/modules/types.md#request)): *Promise*<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`req` | [*Request*](/docs/modules/types.md#request) |

**Returns:** *Promise*<*any*\>

returns Cloogle's unprocessed, unvalidated response

Defined in: [main.ts:88](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L88)

___

### raw\_query

▸ **raw_query**(`parameters`: *string*): *Promise*<*Either*<Errors, [*Response*](/docs/modules/types.md#response)\>\>

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`parameters` | *string* | a string that represent the endpoint to be queried   |

**Returns:** *Promise*<*Either*<Errors, [*Response*](/docs/modules/types.md#response)\>\>

returns either a validation error, or a `Response` from Cloogle

Defined in: [main.ts:80](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L80)

___

### raw\_query\_no\_validation

▸ **raw_query_no_validation**(`parameters`: *string*): *Promise*<*any*\>

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`parameters` | *string* | a string that represent the endpoint to be queried   |

**Returns:** *Promise*<*any*\>

returns Cloogle's unprocessed, unvalidated response

Defined in: [main.ts:70](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L70)

___

### string\_of\_Result

▸ **string_of_Result**(`r`: [*Result*](/docs/modules/types.md#result)): *string*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`r` | [*Result*](/docs/modules/types.md#result) | a Cloogle result   |

**Returns:** *string*

a "short" string that sums up the information held by `r`

Defined in: [main.ts:129](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L129)

___

### stringifyRequest

▸ **stringifyRequest**(`r`: [*Request*](/docs/modules/types.md#request)): *string*

#### Parameters:

Name | Type |
------ | ------ |
`r` | [*Request*](/docs/modules/types.md#request) |

**Returns:** *string*

the endpoint to the Cloogle API for `request`

Defined in: [main.ts:42](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L42)

___

### strings\_of\_Response

▸ **strings_of_Response**(`r`: [*Response*](/docs/modules/types.md#response)): *string*[]

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`r` | [*Response*](/docs/modules/types.md#response) | a Cloogle response   |

**Returns:** *string*[]

a list of "short" strings that sums up informations held in `r.data`

Defined in: [main.ts:152](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/main.ts#L152)
