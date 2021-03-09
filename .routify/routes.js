
/**
 * @roxi/routify 2.13.1
 * File generated Tue Mar 09 2021 20:31:51 GMT+0000 (Greenwich Mean Time)
 */

export const __version = "2.13.1"
export const __timestamp = "2021-03-09T20:31:51.116Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "articles",
      "filepath": "/articles",
      "name": "articles",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_fallback.svelte",
          "filepath": "/articles/_fallback.svelte",
          "name": "_fallback",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/_fallback.svelte",
          "importPath": "../src/pages/articles/_fallback.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": true,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/_fallback",
          "id": "_articles__fallback",
          "component": () => import('../src/pages/articles/_fallback.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "async-array-reduce.md",
          "filepath": "/articles/async-array-reduce.md",
          "name": "async-array-reduce",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/async-array-reduce.md",
          "importPath": "../src/pages/articles/async-array-reduce.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "path": "/a/async-array-reduce",
              "date": "09-22-2020",
              "shortTitle": "Async Array Reduce",
              "title": "Asynchronous Array Reduce",
              "author": "Conor Sinclair",
              "tags": [
                "Javascript"
              ],
              "emoji": "🍳"
            },
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/async-array-reduce",
          "id": "_articles_asyncArrayReduce",
          "component": () => import('../src/pages/articles/async-array-reduce.md').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "flattening-nested-objects.md",
          "filepath": "/articles/flattening-nested-objects.md",
          "name": "flattening-nested-objects",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/flattening-nested-objects.md",
          "importPath": "../src/pages/articles/flattening-nested-objects.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "path": "/a/flattening-nested-objects",
              "date": "09-24-2020",
              "shortTitle": "Flattening Nested Objects",
              "title": "Flattening Nested Objects",
              "author": "Conor Sinclair",
              "tags": [
                "Javascript"
              ],
              "emoji": "🐦"
            },
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/flattening-nested-objects",
          "id": "_articles_flatteningNestedObjects",
          "component": () => import('../src/pages/articles/flattening-nested-objects.md').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/articles/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/index.svelte",
          "importPath": "../src/pages/articles/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/index",
          "id": "_articles_index",
          "component": () => import('../src/pages/articles/index.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "input-focusing.md",
          "filepath": "/articles/input-focusing.md",
          "name": "input-focusing",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/input-focusing.md",
          "importPath": "../src/pages/articles/input-focusing.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "path": "/a/input-focusing",
              "date": "04-09-2020",
              "shortTitle": "Input Focusing",
              "title": "Focusing on inputs in React",
              "author": "Conor Sinclair",
              "tags": [
                "Javascript",
                "React"
              ],
              "emoji": "⌨"
            },
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/input-focusing",
          "id": "_articles_inputFocusing",
          "component": () => import('../src/pages/articles/input-focusing.md').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "pwd-quest.md",
          "filepath": "/articles/pwd-quest.md",
          "name": "pwd-quest",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/pwd-quest.md",
          "importPath": "../src/pages/articles/pwd-quest.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "path": "/a/mighty-pwd-quest",
              "date": "09-25-2020",
              "title": "The Mighty Quest For PWD",
              "shortTitle": "Quest For PWD",
              "author": "Conor Sinclair",
              "featuredImage": "../images/matthew-kalapuch-7psXKRl2amU-unsplash.jpg",
              "tags": [
                "Zsh"
              ],
              "emoji": "⚔"
            },
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/pwd-quest",
          "id": "_articles_pwdQuest",
          "component": () => import('../src/pages/articles/pwd-quest.md').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "this-blog.md",
          "filepath": "/articles/this-blog.md",
          "name": "this-blog",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/this-blog.md",
          "importPath": "../src/pages/articles/this-blog.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "path": "/a/creation",
              "date": "05-07-2019",
              "title": "Building a Gatsby blog",
              "shortTitle": "Creation",
              "author": "Conor Sinclair",
              "featuredImage": "../images/daan-stevens-9z0V7KuvPgo-unsplash.jpg",
              "tags": [
                "Gatsby",
                "Javascript",
                "React"
              ],
              "emoji": "✏"
            },
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/this-blog",
          "id": "_articles_thisBlog",
          "component": () => import('../src/pages/articles/this-blog.md').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "vim-change-indent.md",
          "filepath": "/articles/vim-change-indent.md",
          "name": "vim-change-indent",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/articles/vim-change-indent.md",
          "importPath": "../src/pages/articles/vim-change-indent.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "path": "/a/quick-vim-indent-change",
              "date": "09-24-2020",
              "title": "Quick Vim Indentation Change",
              "shortTitle": "Quick Vim Indent Change",
              "author": "Conor Sinclair",
              "featuredImage": "../images/rostyslav-savchyn-TDV1i2f7rcc-unsplash.jpg",
              "tags": [
                "Vim"
              ],
              "emoji": "🔱"
            },
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/articles/vim-change-indent",
          "id": "_articles_vimChangeIndent",
          "component": () => import('../src/pages/articles/vim-change-indent.md').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/articles"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.md",
      "filepath": "/index.md",
      "name": "index",
      "ext": "md",
      "badExt": false,
      "absolutePath": "/home/conor/Repos/C-Sinclair/blog/src/pages/index.md",
      "importPath": "../src/pages/index.md",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "frontmatter": {
          "title": "Irrelevant Blog",
          "description": "Blog home page",
          "author": "Conor Sinclair"
        },
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.md').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

