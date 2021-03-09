import { createRollupConfigs } from './scripts/base.config.js'
import slug from 'remark-slug'
import containers from 'remark-containers'
import { mdsvex } from 'mdsvex'
import autoPreprocess from 'svelte-preprocess'
import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'

const production = !process.env.ROLLUP_WATCH;

export const config = {
  staticDir: 'static',
  distDir: 'dist',
  buildDir: `dist/build`,
  production,
  rollupWrapper: cfg => cfg,
  svelteWrapper: svelte => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: {
          plugins: [
            postcssImport(),
            postcssPresetEnv({ stage: 1 })
          ]
        }
      }),
      mdsvex({
        remarkPlugins: [slug, containers],
        layout: {
          _: './src/pages/_md.svelte'
        },
        extension: 'md'
      })
    ]
    svelte.extensions = ['.svelte', '.md']
    return svelte
  },
  swWrapper: cfg => cfg,
}

const configs = createRollupConfigs(config)

export default configs
