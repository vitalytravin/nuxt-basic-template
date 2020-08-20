import { select } from '@storybook/addon-knobs'
import { i18n } from './i18n.setup' 

export const i18nDecorator = (story, context) => ({
  template: '<story/>',
  i18n,
  props: {
    storybookLocale: {
      type: String,
      default: select('I18n locale', i18n.availableLocales, i18n.locale),
    },
  },
  watch: {
    storybookLocale: {
      handler() {
        this.$i18n.locale = this.storybookLocale
      },
      immediate: true,
    },
  },
})