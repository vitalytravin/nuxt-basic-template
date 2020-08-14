import { addDecorator } from '@storybook/vue'

import Vuetify from 'vuetify'

import Vue from 'vue'

import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons/iconfont/material-icons.css'

Vue.use(Vuetify, {
   
})

const vuetifyConfig = new Vuetify({
	
})

addDecorator(() => ({
  vuetify: vuetifyConfig,
  template: '<v-app><story/></v-app>'
}))