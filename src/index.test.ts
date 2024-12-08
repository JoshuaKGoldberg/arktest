import { type } from "arktype";
import { describe, expect, test } from "vitest";

import type { TypeOrValidate } from "./types.js";

import { expect as arkExpect } from "./index.js";

describe("expect", () => {
	describe("toMatchSchema", () => {
		describe.each([
			["...", "string"],
			["...", "number", "must be a number (was a string)"],
			[{ name: "..." }, { name: "string" }],
			[
				{ name: "..." },
				{ name: "number" },
				"name must be a number (was a string)",
			],
		])("%j against %j", (value: {}, matcher: {}, error?: string) => {
			test.each([
				["raw schema", matcher],
				["ArkType type", type(matcher)],
			])("%s", (_, schema: TypeOrValidate) => {
				const act = () => {
					arkExpect(value).toMatchSchema(schema);
				};

				if (error) {
					expect(act).toThrow(error);
				} else {
					expect(act).not.toThrowError();
				}
			});
		});
	});
});
