<h1 align="center">ArkTest</h1>

<p align="center">Experimental Arktype-powered assertion library. ⚗️</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/arktest/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/arktest" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/arktest?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/arktest/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/arktest"><img alt="📦 npm version" src="https://img.shields.io/npm/v/arktest?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

This is a fun little prototype to see what it would look like to have `toEqual`/`toMatchObject`-style test assertions using [Arktype](https://arktype.io/https://arktype.io) schemas.

```shell
npm i arktest
```

```ts
import { expect } from "arktest";

const value = { name: "..." };

// No thrown error, as expected ✅
expect(value).toMatchSchema({ name: "string" });

// Error: name must be a number (was a string), as expected ✅
expect(value).toMatchSchema({ name: "string" });
```

> 💡 Inspired by a discussion with [@ssalbdivad](https://github.com/ssalbdivad) following [vitest-dev/vitest#7015 expect.any and expect.anything should return something more specific than any](https://github.com/vitest-dev/vitest/issues/7015).

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://arktype.io/"><img src="https://avatars.githubusercontent.com/u/10645823?v=4?s=100" width="100px;" alt="David Blass"/><br /><sub><b>David Blass</b></sub></a><br /><a href="#ideas-ssalbdivad" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/arktest/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/arktest/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
