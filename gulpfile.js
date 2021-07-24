/* eslint-disable no-console */

import gulp from 'gulp';
import fs from 'fs-extra';
import globby from 'globby';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import { rollup } from 'rollup';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
import rollupCommonjs from '@rollup/plugin-commonjs';
import rollupBabel from '@rollup/plugin-babel';
import browserSync from 'browser-sync';


const srcDir = 'src';
const destDir = 'dist';

const stylesSrcPath = `${srcDir}/styles/main.css`;
const stylesSrcPattern = `${srcDir}/styles/**/*.css`;
const stylesDestPath = `${destDir}/styles/main.css`;

const scriptsSrcPath = `${srcDir}/scripts/main.js`;
const scriptsSrcPattern = `${srcDir}/scripts/**/*.js`;
const scriptsDestDir = `${destDir}/scripts`;

const pagesSrcPattern = `${srcDir}/*.html`;


const postcssPlugins = [
  postcssImport(),
  autoprefixer(),
];

const babelOptions = {
  babelrc: false,
  configFile: false,
  exclude: 'node_modules/**',
  babelHelpers: 'bundled',
  presets: [
    ['@babel/preset-env', {
      loose: true,
      bugfixes: true,
    }],
  ],
};

const rollupInputOptions = {
  input: scriptsSrcPath,
  plugins: [
    rollupNodeResolve(),
    rollupCommonjs(),
    rollupBabel.babel(babelOptions),
  ],
};

const rollupOutputOptions = {
  dir: scriptsDestDir,
  format: 'iife',
  entryFileNames: '[name].js',
};

const browserSyncOptions = {
  server: destDir,
  files: [{
    match: [destDir],
    // eslint-disable-next-line object-shorthand
    fn: function () { this.reload(); },
    options: { ignoreInitial: true },
  }],
  open: false,
  notify: false,
  port: 8080,
  logFileChanges: false,
};


async function clean() {
  await fs.remove(destDir);
}


async function styles() {
  try {
    const content = await fs.readFile(stylesSrcPath, 'utf-8');
    const { css } = await postcss(postcssPlugins).process(content, {
      from: stylesSrcPath,
    });
    await fs.outputFile(stylesDestPath, css);
  } catch (err) {
    console.error(err);
  }
}


async function scripts() {
  try {
    const bundle = await rollup(rollupInputOptions);
    rollupInputOptions.cache = bundle.cache;
    await bundle.write(rollupOutputOptions);
  } catch (err) {
    console.error(err);
  }
}


async function pages() {
  try {
    const matchedPaths = await globby(pagesSrcPattern);
    await Promise.all(matchedPaths.map(async (pageSrcPath) => {
      const pageDestPath = pageSrcPath.replace(srcDir, destDir);
      await fs.copy(pageSrcPath, pageDestPath);
    }));
  } catch (err) {
    console.error(err);
  }
}


function watch() {
  gulp.watch(stylesSrcPattern, gulp.series(styles));
  gulp.watch(scriptsSrcPattern, gulp.series(scripts));
  gulp.watch(pagesSrcPattern, gulp.series(pages));
}


function serve() {
  browserSync.init(browserSyncOptions);
}


export const build = gulp.series(clean, gulp.parallel(styles, scripts, pages));
export const start = gulp.series(build, gulp.parallel(serve, watch));
export default start;
