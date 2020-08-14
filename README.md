# nuxt-basic-template

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Сonfigured as

npx create-nuxt-app nuxt-basic-template
1. Typescript
2. Npm
3. Vuetify.js
4. Axios, Content
5. Eslint, Prettier, StyleLint
6. Jest
7. SPA
8. Static
9. jsconfig.json


1. Added configuration for correct display of sources during debugging:
```
build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        //for correct display of sources
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
```

2. Configurated auth nuxt module with test auth server (api/auth.js)

3. Install Storybook
    1. npx sb init
    2. npm install @nuxtjs/storybook:2.0.0
    3. npm i core-js@3 @babel/runtime-corejs3 --save-dev 




