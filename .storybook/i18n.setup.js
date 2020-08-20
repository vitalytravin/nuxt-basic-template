import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../i18n'

Vue.use(VueI18n)

const getLocale = () => {
  return (window.navigator.userLanguage || window.navigator.language).substring(0, 2);
};

const i18n = new VueI18n({
  locale: getLocale(),
  locales:Object.keys(messages),
  messages
})


export {i18n};