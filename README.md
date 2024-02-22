<h1 align='center'>🜾</h1>

<p align='center'>
  MaGiK WeL - Base Vite Template for Coventry Grove sites incorporating new SIS (Steps In Stone) Builder Structure
</p>

<p align='center'>
<a href="https://github.com/BBuchholz/worthy-mountain">Worthy Mountain</a>'s Tag Line Was: Preparing tha Vessels 2B <b>MystiQal Wizards</b><sup><em>Movin' Wights</em></sup><br>
</p>

<p align='center'>
For this Projeckt, tha Directive Came Through as "Carve Steps From Tha Worthy Mountain To Build Tha MaGiK WeL" and here we are
<br>
</p>


<br>

<p align='center'>
<a href="https://magik-wel.netlify.app/">Live Demo</a>
</p>

<br>


## Try it now!

> MaGiK WeL requires Node >=14.18

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/BBuchholz/magik-wel/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit BBuchholz/magik-wel my-magik-wel-app
cd my-magik-wel-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```


## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

First, initialize as a Netlify site

```
ntl init
```

Then just build and deploy

```
ntl build
ntl deploy
```

Then, after review, deploy to production with

```
ntl deploy --prod
```

## Checklist

When you use this template, try to follow the checklist to update your info properly 

- [ ] Modify LICENSING as needed

- [ ] Change the title in `App.vue` 
- [ ] Change title on home page

- [ ] Change the default MYRIAD SYMBOL to reflect Desired Branding

- [ ] Change the hostname in `vite.config.ts`
- [ ] change all github links to point to the proper site
- [ ] change demo link to hosted site
- [ ] add Logo to index.vue

- [ ] Change the favicon in `public`

- [ ] Clean up the README when finished

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🌍 [I18n ready](./locales)

- 🔎 [Component Preview](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview)

- 🗒 [Markdown Support](https://github.com/antfu/vite-plugin-vue-markdown)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- 🦔 Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- 🔤 [Webfont self-hosting](https://github.com/feat-agency/vite-plugin-webfont-dl)

- 🦾 TypeScript, of course

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/) on [GitHub Actions](https://github.com/features/actions)

- ☁️ Deploy on Netlify, zero-config

<br>


## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
- [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`unplugin-vue-macros`](https://github.com/sxzz/unplugin-vue-macros) - Explore and extend more macros and syntax sugar to Vue.
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-vue-component-preview`](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview) - Preview single component in VSCode
- [`vite-plugin-vue-markdown`](https://github.com/antfu/vite-plugin-vue-markdown) - Markdown as components / components in Markdown
  - [`markdown-it-shiki`](https://github.com/antfu/markdown-it-shiki) - [Shiki](https://github.com/shikijs/shiki) for syntax highlighting
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - unplugin for Vue I18n
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - Sitemap generator
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively
- [`vite-plugin-vue-inspector`](https://github.com/webfansplz/vite-plugin-vue-inspector) - jump to local IDE source code while click the element of browser automatically
- [`vite-plugin-webfont-dl`](https://github.com/feat-agency/vite-plugin-webfont-dl) - Zero-config webfont (Google Fonts) downloader and injector to improve website's performance.

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- [Cypress](https://cypress.io/) - E2E testing
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Static-site generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - All in one i18n support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Credit Where Credit Is Due

This template was adapted from the very excellent 
[Vitesse template on GitHub](https://github.com/antfu/vitesse). created by [antfu](https://github.com/antfu) to whom I am grateful. The work done there gave me a wonderfully thought out starting point for my own remixes, which is entirely in line with the dev philosophy WE actively embrace with MyriaD.

## i18n Removal
When we cloned the original [Vitesse template on GitHub](https://github.com/antfu/vitesse). created by [antfu](https://github.com/antfu), i18n was part of it, but outside the scope of what we are using it for. 

We wanted pretty much all of the other features that were missing from the lite version, so we opted to stay with the main version and just remove the i18n usages.

We are leaving the packages in for anyone that wants to come along and port things to other languages, but at this time its not feasible, for that reason all usages are being removed from the code

## Docker Support Removed

We don't use Docker, and are not supporting it at this time with this template, any lingering files feels free to submit an issue to remove but We will need to make sure nothing breaks when we do so, so I'm leaving everything as is for now.

