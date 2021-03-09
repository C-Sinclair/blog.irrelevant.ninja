import svelte from 'rollup-plugin-svelte-hot';
import Hmr from 'rollup-plugin-hot'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'
import del from 'del'

const isNollup = !!process.env.NOLLUP

export function createRollupConfigs(config) {
    const { production, distDir } = config
    const useDynamicImports = process.env.BUNDLING === 'dynamic' || isNollup || !!production

    del.sync(distDir + '/**') // clear previous builds

    // Combine configs as needed
    return [
        !isNollup && baseConfig(config, { dynamicImports: false }),
        useDynamicImports && baseConfig(config, { dynamicImports: true }),
    ].filter(Boolean)
}

/**
 * Base config extended by dynamicConfig and baseConfig
 */
function baseConfig(config, ctx) {
    const { dynamicImports } = ctx
    const { staticDir, distDir, production, buildDir, svelteWrapper, rollupWrapper } = config

    const outputConfig = !!dynamicImports
        ? { format: 'esm', dir: buildDir }
        : { format: 'iife', file: `${buildDir}/bundle.js` }

    const svelteConfig = {
        dev: !production, // run-time checks      
        // Extract component CSS — better performance
        css: css => css.write(`${buildDir}/bundle.css`),
        hot: isNollup,
    }

    const rollupConfig = {
        inlineDynamicImports: !dynamicImports,
        input: `src/main.js`,
        output: {
            name: 'routify_app',
            sourcemap: true,
            ...outputConfig
        },
        plugins: [
            copy({
                targets: [
                    { src: [`${staticDir}/*`, "!*/(__index.html)"], dest: distDir },
                    { src: [`${staticDir}/__index.html`], dest: distDir, rename: '__app.html', transform },
                ],
                copyOnce: true,
                flatten: false
            }),
            svelte(svelteWrapper(svelteConfig, ctx)),

            // resolve matching modules from current working directory
            resolve({
                browser: true,
                dedupe: importee => !!importee.match(/svelte(\/|$)/)
            }),
            commonjs(),

            production && terser(), // minify
            !production && isNollup && Hmr({ inMemory: true, public: staticDir, }), // refresh only updated code
            !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
        ],
        watch: {
            clearScreen: false,
            buildDelay: 100,
        }
    }

    return rollupWrapper(rollupConfig, ctx)

    function transform(contents) {
        const scriptTag = typeof config.scriptTag != 'undefined' ?
        config.scriptTag : '<script type="module" defer src="/build/main.js"></script>'
        const bundleTag = '<script defer src="/build/bundle.js"></script>'
        return contents.toString().replace('__SCRIPT__', dynamicImports ? scriptTag : bundleTag)
    }
}
