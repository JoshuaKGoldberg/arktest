import type { Type } from "arktype";

import type { TypeOrValidate } from "./types.js";

/** @todo Does ArkType provider a better thing for this? */
export function isArkTypeType(matcher: TypeOrValidate): matcher is Type {
	return matcher.constructor.name === "IntersectionNode";
}
