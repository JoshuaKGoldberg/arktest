import { Type, type } from "arktype";

export interface ArkAssertion {
	toMatchSchema(matcher: TypeOrValidate): void;
}

export type TypeOrValidate = Type | type.validate<object>;
