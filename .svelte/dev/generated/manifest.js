import * as layout from "../../../src/routes/$layout.svelte";

const components = [
	() => import("../../../src/routes/index.md"),
	() => import("../../../src/routes/articles/$layout.svelte"),
	() => import("../../../src/routes/articles/flattening-nested-objects.md"),
	() => import("../../../src/routes/articles/async-array-reduce.md"),
	() => import("../../../src/routes/articles/vim-change-indent.md"),
	() => import("../../../src/routes/articles/input-focusing.md"),
	() => import("../../../src/routes/articles/pwd-quest.md"),
	() => import("../../../src/routes/articles/this-blog.md"),
	() => import("../../../src/routes/articles.md")
];

const d = decodeURIComponent;
const empty = () => ({});

export const pages = [
	{
		// src/routes/index.md
		pattern: /^\/$/,
		params: empty,
		parts: [components[0]]
	},

	{
		// src/routes/articles/flattening-nested-objects.md
		pattern: /^\/articles\/flattening-nested-objects\/?$/,
		params: empty,
		parts: [components[1], components[2]]
	},

	{
		// src/routes/articles/async-array-reduce.md
		pattern: /^\/articles\/async-array-reduce\/?$/,
		params: empty,
		parts: [components[1], components[3]]
	},

	{
		// src/routes/articles/vim-change-indent.md
		pattern: /^\/articles\/vim-change-indent\/?$/,
		params: empty,
		parts: [components[1], components[4]]
	},

	{
		// src/routes/articles/input-focusing.md
		pattern: /^\/articles\/input-focusing\/?$/,
		params: empty,
		parts: [components[1], components[5]]
	},

	{
		// src/routes/articles/pwd-quest.md
		pattern: /^\/articles\/pwd-quest\/?$/,
		params: empty,
		parts: [components[1], components[6]]
	},

	{
		// src/routes/articles/this-blog.md
		pattern: /^\/articles\/this-blog\/?$/,
		params: empty,
		parts: [components[1], components[7]]
	},

	{
		// src/routes/articles.md
		pattern: /^\/articles\/?$/,
		params: empty,
		parts: [components[8]]
	}
];

export const ignore = [
	/^\/api\/articles\/?$/
];

export { layout };