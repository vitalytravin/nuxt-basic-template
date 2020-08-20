import { i18nDecorator } from './i18n.knobs.decorator'
// import { i18nDecorator } from './i18n.toolbar.decorator' //dont work
// import { globalTypes } from './i18n.toolbar.decorator'

// export {globalTypes};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [i18nDecorator];