import { type } from "arktype";

import type { ArkAssertion } from "./types.js";

import { isArkTypeType } from "./isArkTypeType.js";

export function expect(value: unknown): ArkAssertion {
	return {
		toMatchSchema(matcher) {
			const schema = isArkTypeType(matcher) ? matcher : type(matcher);
			const matched = schema(value);

			if (matched instanceof type.errors) {
				throw new Error(matched.summary);
			}
		},
	};
}
