[cloogle-js](/docs/README.md) / [Exports](/docs/modules.md) / validation

# Namespace: validation

## Table of contents

### Variables

- [ABCArgument](/docs/modules/validation.md#abcargument)
- [ABCArgumentType](/docs/modules/validation.md#abcargumenttype)
- [ABCInstructionResult](/docs/modules/validation.md#abcinstructionresult)
- [ABCInstructionResultExtras](/docs/modules/validation.md#abcinstructionresultextras)
- [BasicResult](/docs/modules/validation.md#basicresult)
- [BasicResult\_opt](/docs/modules/validation.md#basicresult_opt)
- [BasicResult\_req](/docs/modules/validation.md#basicresult_req)
- [ClassResult](/docs/modules/validation.md#classresult)
- [ClassResultExtras](/docs/modules/validation.md#classresultextras)
- [ClassResultExtras\_opt](/docs/modules/validation.md#classresultextras_opt)
- [ClassResultExtras\_req](/docs/modules/validation.md#classresultextras_req)
- [CleanLangReportLocation](/docs/modules/validation.md#cleanlangreportlocation)
- [FunctionKind](/docs/modules/validation.md#functionkind)
- [FunctionResult](/docs/modules/validation.md#functionresult)
- [FunctionResultExtras](/docs/modules/validation.md#functionresultextras)
- [FunctionResultExtras\_opt](/docs/modules/validation.md#functionresultextras_opt)
- [FunctionResultExtras\_req](/docs/modules/validation.md#functionresultextras_req)
- [LocationResult](/docs/modules/validation.md#locationresult)
- [ModuleResult](/docs/modules/validation.md#moduleresult)
- [ModuleResultExtras](/docs/modules/validation.md#moduleresultextras)
- [ProblemResult](/docs/modules/validation.md#problemresult)
- [Request](/docs/modules/validation.md#request)
- [Response](/docs/modules/validation.md#response)
- [Response\_opt](/docs/modules/validation.md#response_opt)
- [Response\_req](/docs/modules/validation.md#response_req)
- [Result](/docs/modules/validation.md#result)
- [ShortClassResult](/docs/modules/validation.md#shortclassresult)
- [StrUnifier](/docs/modules/validation.md#strunifier)
- [SyntaxExample](/docs/modules/validation.md#syntaxexample)
- [SyntaxExample\_opt](/docs/modules/validation.md#syntaxexample_opt)
- [SyntaxExample\_req](/docs/modules/validation.md#syntaxexample_req)
- [SyntaxResult](/docs/modules/validation.md#syntaxresult)
- [SyntaxResultExtras](/docs/modules/validation.md#syntaxresultextras)
- [TypeResult](/docs/modules/validation.md#typeresult)
- [TypeResultExtras](/docs/modules/validation.md#typeresultextras)
- [TypeResultExtras\_opt](/docs/modules/validation.md#typeresultextras_opt)
- [TypeResultExtras\_req](/docs/modules/validation.md#typeresultextras_req)

## Variables

### ABCArgument

• `Const` **ABCArgument**: *TupleC*<[*LiteralC*<*ABCArgument*\>, *UnionC*<[*TupleC*<[*LiteralC*<*ABCTypeLabel*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackSize*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackSize*\>]\>]\>, *BooleanC*]\>

Defined in: [TypeValidation.ts:125](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L125)

___

### ABCArgumentType

• `Const` **ABCArgumentType**: *UnionC*<[*TupleC*<[*LiteralC*<*ABCTypeLabel*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackSize*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackSize*\>]\>]\>

Defined in: [TypeValidation.ts:13](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L13)

___

### ABCInstructionResult

• `Const` **ABCInstructionResult**: *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *TypeC*<{ `abc_arguments`: *ArrayC*<*TupleC*<[*LiteralC*<*ABCArgument*\>, *UnionC*<[*TupleC*<[*LiteralC*<*ABCTypeLabel*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackSize*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackSize*\>]\>]\>, *BooleanC*]\>\> ; `abc_instruction`: *StringC*  }\>]\>

Defined in: [TypeValidation.ts:187](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L187)

___

### ABCInstructionResultExtras

• `Const` **ABCInstructionResultExtras**: *TypeC*<{ `abc_arguments`: *ArrayC*<*TupleC*<[*LiteralC*<*ABCArgument*\>, *UnionC*<[*TupleC*<[*LiteralC*<*ABCTypeLabel*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackOffset*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeAStackSize*\>]\>, *TupleC*<[*LiteralC*<*ABCTypeBStackSize*\>]\>]\>, *BooleanC*]\>\> ; `abc_instruction`: *StringC*  }\>

Defined in: [TypeValidation.ts:172](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L172)

___

### BasicResult

• `Const` **BasicResult**: *IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>

Defined in: [TypeValidation.ts:143](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L143)

___

### BasicResult\_opt

• `Const` **BasicResult\_opt**: *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>

Defined in: [TypeValidation.ts:127](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L127)

___

### BasicResult\_req

• `Const` **BasicResult\_req**: *TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>

Defined in: [TypeValidation.ts:136](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L136)

___

### ClassResult

• `Const` **ClassResult**: *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `class_funs`: *ArrayC*<*StringC*\> ; `class_heading`: *StringC* ; `class_instances`: *ArrayC*<*TupleC*<[*ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `class_name`: *StringC*  }\>, *PartialC*<{ `class_fun_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\>  }\>]\>]\>

Defined in: [TypeValidation.ts:181](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L181)

___

### ClassResultExtras

• `Const` **ClassResultExtras**: *IntersectionC*<[*TypeC*<{ `class_funs`: *ArrayC*<*StringC*\> ; `class_heading`: *StringC* ; `class_instances`: *ArrayC*<*TupleC*<[*ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `class_name`: *StringC*  }\>, *PartialC*<{ `class_fun_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\>  }\>]\>

Defined in: [TypeValidation.ts:88](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L88)

___

### ClassResultExtras\_opt

• `Const` **ClassResultExtras\_opt**: *PartialC*<{ `class_fun_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\>  }\>

Defined in: [TypeValidation.ts:74](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L74)

___

### ClassResultExtras\_req

• `Const` **ClassResultExtras\_req**: *TypeC*<{ `class_funs`: *ArrayC*<*StringC*\> ; `class_heading`: *StringC* ; `class_instances`: *ArrayC*<*TupleC*<[*ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `class_name`: *StringC*  }\>

Defined in: [TypeValidation.ts:81](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L81)

___

### CleanLangReportLocation

• `Const` **CleanLangReportLocation**: *TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>

Defined in: [TypeValidation.ts:49](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L49)

___

### FunctionKind

• `Const` **FunctionKind**: *UnionC*<[*TupleC*<[*LiteralC*<*Function*\>]\>, *TupleC*<[*LiteralC*<*Macro*\>]\>, *TupleC*<[*LiteralC*<*Constructor*\>]\>, *TupleC*<[*LiteralC*<*RecordField*\>]\>, *TupleC*<[*LiteralC*<*ClassMember*\>]\>, *TupleC*<[*LiteralC*<*ClassMacro*\>]\>]\>

Defined in: [TypeValidation.ts:4](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L4)

___

### FunctionResult

• `Const` **FunctionResult**: *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `func`: *StringC* ; `kind`: *UnionC*<[*TupleC*<[*LiteralC*<*Function*\>]\>, *TupleC*<[*LiteralC*<*Macro*\>]\>, *TupleC*<[*LiteralC*<*Constructor*\>]\>, *TupleC*<[*LiteralC*<*RecordField*\>]\>, *TupleC*<[*LiteralC*<*ClassMember*\>]\>, *TupleC*<[*LiteralC*<*ClassMacro*\>]\>]\>  }\>, *PartialC*<{ `cls`: *TypeC*<{ `cls_name`: *StringC* ; `cls_vars`: *ArrayC*<*StringC*\>  }\> ; `constructor_of`: *StringC* ; `generic_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `generic_var_doc`: *ArrayC*<*StringC*\> ; `param_doc`: *ArrayC*<*StringC*\> ; `recordfield_of`: *StringC* ; `required_context`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `result_doc`: *ArrayC*<*StringC*\> ; `throws_doc`: *ArrayC*<*StringC*\> ; `type_doc`: *StringC* ; `unifier`: *TypeC*<{ `left_to_right`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `right_to_left`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `used_synonyms`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\>  }\>  }\>]\>]\>

Defined in: [TypeValidation.ts:177](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L177)

___

### FunctionResultExtras

• `Const` **FunctionResultExtras**: *IntersectionC*<[*TypeC*<{ `func`: *StringC* ; `kind`: *UnionC*<[*TupleC*<[*LiteralC*<*Function*\>]\>, *TupleC*<[*LiteralC*<*Macro*\>]\>, *TupleC*<[*LiteralC*<*Constructor*\>]\>, *TupleC*<[*LiteralC*<*RecordField*\>]\>, *TupleC*<[*LiteralC*<*ClassMember*\>]\>, *TupleC*<[*LiteralC*<*ClassMacro*\>]\>]\>  }\>, *PartialC*<{ `cls`: *TypeC*<{ `cls_name`: *StringC* ; `cls_vars`: *ArrayC*<*StringC*\>  }\> ; `constructor_of`: *StringC* ; `generic_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `generic_var_doc`: *ArrayC*<*StringC*\> ; `param_doc`: *ArrayC*<*StringC*\> ; `recordfield_of`: *StringC* ; `required_context`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `result_doc`: *ArrayC*<*StringC*\> ; `throws_doc`: *ArrayC*<*StringC*\> ; `type_doc`: *StringC* ; `unifier`: *TypeC*<{ `left_to_right`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `right_to_left`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `used_synonyms`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\>  }\>  }\>]\>

Defined in: [TypeValidation.ts:164](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L164)

___

### FunctionResultExtras\_opt

• `Const` **FunctionResultExtras\_opt**: *PartialC*<{ `cls`: *TypeC*<{ `cls_name`: *StringC* ; `cls_vars`: *ArrayC*<*StringC*\>  }\> ; `constructor_of`: *StringC* ; `generic_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `generic_var_doc`: *ArrayC*<*StringC*\> ; `param_doc`: *ArrayC*<*StringC*\> ; `recordfield_of`: *StringC* ; `required_context`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `result_doc`: *ArrayC*<*StringC*\> ; `throws_doc`: *ArrayC*<*StringC*\> ; `type_doc`: *StringC* ; `unifier`: *TypeC*<{ `left_to_right`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `right_to_left`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `used_synonyms`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\>  }\>  }\>

Defined in: [TypeValidation.ts:145](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L145)

___

### FunctionResultExtras\_req

• `Const` **FunctionResultExtras\_req**: *TypeC*<{ `func`: *StringC* ; `kind`: *UnionC*<[*TupleC*<[*LiteralC*<*Function*\>]\>, *TupleC*<[*LiteralC*<*Macro*\>]\>, *TupleC*<[*LiteralC*<*Constructor*\>]\>, *TupleC*<[*LiteralC*<*RecordField*\>]\>, *TupleC*<[*LiteralC*<*ClassMember*\>]\>, *TupleC*<[*LiteralC*<*ClassMacro*\>]\>]\>  }\>

Defined in: [TypeValidation.ts:159](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L159)

___

### LocationResult

• `Const` **LocationResult**: *TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>

Defined in: [TypeValidation.ts:26](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L26)

___

### ModuleResult

• `Const` **ModuleResult**: *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *TypeC*<{ `module_is_core`: *BooleanC*  }\>]\>

Defined in: [TypeValidation.ts:183](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L183)

___

### ModuleResultExtras

• `Const` **ModuleResultExtras**: *TypeC*<{ `module_is_core`: *BooleanC*  }\>

Defined in: [TypeValidation.ts:90](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L90)

___

### ProblemResult

• `Const` **ProblemResult**: *TypeC*<{ `problem_description`: *StringC* ; `problem_examples`: *ArrayC*<*StringC*\> ; `problem_key`: *StringC* ; `problem_solutions`: *ArrayC*<*StringC*\> ; `problem_title`: *StringC*  }\>

Defined in: [TypeValidation.ts:106](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L106)

___

### Request

• `Const` **Request**: *PartialC*<{ `className`: *StringC* ; `exactName`: *StringC* ; `include_apps`: *BooleanC* ; `include_builtins`: *BooleanC* ; `include_core`: *BooleanC* ; `libraries`: *ArrayC*<*StringC*\> ; `modules`: *ArrayC*<*StringC*\> ; `name`: *StringC* ; `page`: *NumberC* ; `typeName`: *StringC* ; `unify`: *StringC* ; `using`: *ArrayC*<*StringC*\>  }\>

Defined in: [TypeValidation.ts:34](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L34)

___

### Response

• `Const` **Response**: *IntersectionC*<[*TypeC*<{ `data`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*FunctionResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `func`: *StringC* ; `kind`: *UnionC*<[*TupleC*<[*LiteralC*<*Function*\>]\>, *TupleC*<[*LiteralC*<*Macro*\>]\>, *TupleC*<[*LiteralC*<*Constructor*\>]\>, *TupleC*<[*LiteralC*<*RecordField*\>]\>, *TupleC*<[*LiteralC*<*ClassMember*\>]\>, *TupleC*<[*LiteralC*<*ClassMacro*\>]\>]\>  }\>, *PartialC*<{ `cls`: *TypeC*<{ `cls_name`: *StringC* ; `cls_vars`: *ArrayC*<*StringC*\>  }\> ; `constructor_of`: *StringC* ; `generic_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `generic_var_doc`: *ArrayC*<*StringC*\> ; `param_doc`: *ArrayC*<*StringC*\> ; `recordfield_of`: *StringC* ; `required_context`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `result_doc`: *ArrayC*<*StringC*\> ; `throws_doc`: *ArrayC*<*StringC*\> ; `type_doc`: *StringC* ; `unifier`: *TypeC*<{ `left_to_right`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `right_to_left`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `used_synonyms`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\>  }\>  }\>]\>]\>]\>, *TupleC*<[*LiteralC*<*TypeResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `type`: *StringC* ; `type_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `type_instances`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\>  }\>, *PartialC*<{ `type_constructor_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_field_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_representation_doc`: *StringC*  }\>]\>]\>]\>, *TupleC*<[*LiteralC*<*ClassResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `class_funs`: *ArrayC*<*StringC*\> ; `class_heading`: *StringC* ; `class_instances`: *ArrayC*<*TupleC*<[*ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `class_name`: *StringC*  }\>, *PartialC*<{ `class_fun_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\>  }\>]\>]\>]\>]\>\> ; `msg`: *StringC*  }\>, *PartialC*<{ `more_available`: *NumberC* ; `suggestions`: *ArrayC*<*TupleC*<[*PartialC*<{ `className`: *StringC* ; `exactName`: *StringC* ; `include_apps`: *BooleanC* ; `include_builtins`: *BooleanC* ; `include_core`: *BooleanC* ; `libraries`: *ArrayC*<*StringC*\> ; `modules`: *ArrayC*<*StringC*\> ; `name`: *StringC* ; `page`: *NumberC* ; `typeName`: *StringC* ; `unify`: *StringC* ; `using`: *ArrayC*<*StringC*\>  }\>, *NumberC*]\>\> ; `warnings`: *ArrayC*<*StringC*\>  }\>]\>

Defined in: [TypeValidation.ts:210](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L210)

___

### Response\_opt

• `Const` **Response\_opt**: *PartialC*<{ `more_available`: *NumberC* ; `suggestions`: *ArrayC*<*TupleC*<[*PartialC*<{ `className`: *StringC* ; `exactName`: *StringC* ; `include_apps`: *BooleanC* ; `include_builtins`: *BooleanC* ; `include_core`: *BooleanC* ; `libraries`: *ArrayC*<*StringC*\> ; `modules`: *ArrayC*<*StringC*\> ; `name`: *StringC* ; `page`: *NumberC* ; `typeName`: *StringC* ; `unify`: *StringC* ; `using`: *ArrayC*<*StringC*\>  }\>, *NumberC*]\>\> ; `warnings`: *ArrayC*<*StringC*\>  }\>

Defined in: [TypeValidation.ts:199](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L199)

___

### Response\_req

• `Const` **Response\_req**: *TypeC*<{ `data`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*FunctionResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `func`: *StringC* ; `kind`: *UnionC*<[*TupleC*<[*LiteralC*<*Function*\>]\>, *TupleC*<[*LiteralC*<*Macro*\>]\>, *TupleC*<[*LiteralC*<*Constructor*\>]\>, *TupleC*<[*LiteralC*<*RecordField*\>]\>, *TupleC*<[*LiteralC*<*ClassMember*\>]\>, *TupleC*<[*LiteralC*<*ClassMacro*\>]\>]\>  }\>, *PartialC*<{ `cls`: *TypeC*<{ `cls_name`: *StringC* ; `cls_vars`: *ArrayC*<*StringC*\>  }\> ; `constructor_of`: *StringC* ; `generic_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `generic_var_doc`: *ArrayC*<*StringC*\> ; `param_doc`: *ArrayC*<*StringC*\> ; `recordfield_of`: *StringC* ; `required_context`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `result_doc`: *ArrayC*<*StringC*\> ; `throws_doc`: *ArrayC*<*StringC*\> ; `type_doc`: *StringC* ; `unifier`: *TypeC*<{ `left_to_right`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `right_to_left`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `used_synonyms`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\>  }\>  }\>]\>]\>]\>, *TupleC*<[*LiteralC*<*TypeResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `type`: *StringC* ; `type_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `type_instances`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\>  }\>, *PartialC*<{ `type_constructor_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_field_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_representation_doc`: *StringC*  }\>]\>]\>]\>, *TupleC*<[*LiteralC*<*ClassResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `class_funs`: *ArrayC*<*StringC*\> ; `class_heading`: *StringC* ; `class_instances`: *ArrayC*<*TupleC*<[*ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `class_name`: *StringC*  }\>, *PartialC*<{ `class_fun_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\>  }\>]\>]\>]\>]\>\> ; `msg`: *StringC*  }\>

Defined in: [TypeValidation.ts:205](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L205)

___

### Result

• `Const` **Result**: *UnionC*<[*TupleC*<[*LiteralC*<*FunctionResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `func`: *StringC* ; `kind`: *UnionC*<[*TupleC*<[*LiteralC*<*Function*\>]\>, *TupleC*<[*LiteralC*<*Macro*\>]\>, *TupleC*<[*LiteralC*<*Constructor*\>]\>, *TupleC*<[*LiteralC*<*RecordField*\>]\>, *TupleC*<[*LiteralC*<*ClassMember*\>]\>, *TupleC*<[*LiteralC*<*ClassMacro*\>]\>]\>  }\>, *PartialC*<{ `cls`: *TypeC*<{ `cls_name`: *StringC* ; `cls_vars`: *ArrayC*<*StringC*\>  }\> ; `constructor_of`: *StringC* ; `generic_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `generic_var_doc`: *ArrayC*<*StringC*\> ; `param_doc`: *ArrayC*<*StringC*\> ; `recordfield_of`: *StringC* ; `required_context`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `result_doc`: *ArrayC*<*StringC*\> ; `throws_doc`: *ArrayC*<*StringC*\> ; `type_doc`: *StringC* ; `unifier`: *TypeC*<{ `left_to_right`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `right_to_left`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `used_synonyms`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\>  }\>  }\>]\>]\>]\>, *TupleC*<[*LiteralC*<*TypeResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `type`: *StringC* ; `type_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `type_instances`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\>  }\>, *PartialC*<{ `type_constructor_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_field_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_representation_doc`: *StringC*  }\>]\>]\>]\>, *TupleC*<[*LiteralC*<*ClassResult*\>, *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `class_funs`: *ArrayC*<*StringC*\> ; `class_heading`: *StringC* ; `class_instances`: *ArrayC*<*TupleC*<[*ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `class_name`: *StringC*  }\>, *PartialC*<{ `class_fun_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\>  }\>]\>]\>]\>]\>

Defined in: [TypeValidation.ts:189](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L189)

___

### ShortClassResult

• `Const` **ShortClassResult**: *TypeC*<{ `cls_name`: *StringC* ; `cls_vars`: *ArrayC*<*StringC*\>  }\>

Defined in: [TypeValidation.ts:120](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L120)

___

### StrUnifier

• `Const` **StrUnifier**: *TypeC*<{ `left_to_right`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `right_to_left`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\> ; `used_synonyms`: *ArrayC*<*TupleC*<[*StringC*, *StringC*]\>\>  }\>

Defined in: [TypeValidation.ts:114](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L114)

___

### SyntaxExample

• `Const` **SyntaxExample**: *IntersectionC*<[*TypeC*<{ `bootstrap`: *ArrayC*<*StringC*\> ; `example`: *StringC* ; `requires_itask_compiler`: *BooleanC*  }\>, *PartialC*<{ `cleanjs_start`: *StringC*  }\>]\>

Defined in: [TypeValidation.ts:104](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L104)

___

### SyntaxExample\_opt

• `Const` **SyntaxExample\_opt**: *PartialC*<{ `cleanjs_start`: *StringC*  }\>

Defined in: [TypeValidation.ts:94](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L94)

___

### SyntaxExample\_req

• `Const` **SyntaxExample\_req**: *TypeC*<{ `bootstrap`: *ArrayC*<*StringC*\> ; `example`: *StringC* ; `requires_itask_compiler`: *BooleanC*  }\>

Defined in: [TypeValidation.ts:98](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L98)

___

### SyntaxResult

• `Const` **SyntaxResult**: *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *TypeC*<{ `syntax_code`: *ArrayC*<*StringC*\> ; `syntax_examples`: *ArrayC*<*IntersectionC*<[*TypeC*<{ `bootstrap`: *ArrayC*<*StringC*\> ; `example`: *StringC* ; `requires_itask_compiler`: *BooleanC*  }\>, *PartialC*<{ `cleanjs_start`: *StringC*  }\>]\>\> ; `syntax_title`: *StringC*  }\>]\>

Defined in: [TypeValidation.ts:185](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L185)

___

### SyntaxResultExtras

• `Const` **SyntaxResultExtras**: *TypeC*<{ `syntax_code`: *ArrayC*<*StringC*\> ; `syntax_examples`: *ArrayC*<*IntersectionC*<[*TypeC*<{ `bootstrap`: *ArrayC*<*StringC*\> ; `example`: *StringC* ; `requires_itask_compiler`: *BooleanC*  }\>, *PartialC*<{ `cleanjs_start`: *StringC*  }\>]\>\> ; `syntax_title`: *StringC*  }\>

Defined in: [TypeValidation.ts:166](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L166)

___

### TypeResult

• `Const` **TypeResult**: *TupleC*<[*IntersectionC*<[*TypeC*<{ `filename`: *StringC* ; `library`: *StringC* ; `modul`: *StringC* ; `name`: *StringC*  }\>, *PartialC*<{ `builtin`: *BooleanC* ; `dcl_line`: *NumberC* ; `distance`: *NumberC* ; `documentation`: *StringC* ; `icl_line`: *NumberC* ; `langrep_documentation`: *ArrayC*<*TypeC*<{ `clr_section`: *StringC* ; `clr_version`: *StringC*  }\>\>  }\>]\>, *IntersectionC*<[*TypeC*<{ `type`: *StringC* ; `type_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `type_instances`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\>  }\>, *PartialC*<{ `type_constructor_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_field_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_representation_doc`: *StringC*  }\>]\>]\>

Defined in: [TypeValidation.ts:179](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L179)

___

### TypeResultExtras

• `Const` **TypeResultExtras**: *IntersectionC*<[*TypeC*<{ `type`: *StringC* ; `type_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `type_instances`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\>  }\>, *PartialC*<{ `type_constructor_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_field_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_representation_doc`: *StringC*  }\>]\>

Defined in: [TypeValidation.ts:72](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L72)

___

### TypeResultExtras\_opt

• `Const` **TypeResultExtras\_opt**: *PartialC*<{ `type_constructor_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_field_doc`: *ArrayC*<*UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *StringC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>\> ; `type_representation_doc`: *StringC*  }\>

Defined in: [TypeValidation.ts:54](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L54)

___

### TypeResultExtras\_req

• `Const` **TypeResultExtras\_req**: *TypeC*<{ `type`: *StringC* ; `type_derivations`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\> ; `type_instances`: *ArrayC*<*TupleC*<[*StringC*, *ArrayC*<*StringC*\>, *ArrayC*<*TupleC*<[*StringC*, *StringC*, *StringC*, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>, *UnionC*<[*TupleC*<[*LiteralC*<*Just*\>, *NumberC*]\>, *TupleC*<[*LiteralC*<*Nothing*\>]\>]\>]\>\>]\>\>  }\>

Defined in: [TypeValidation.ts:66](https://github.com/W95Psp/cloogle-js/blob/62059bb/src/TypeValidation.ts#L66)
