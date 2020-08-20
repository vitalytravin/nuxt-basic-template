import { addDecorator } from '@storybook/vue'

import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons/iconfont/material-icons.css'


Vue.use(Vuetify, {
   
})

const vuetifyConfig = new Vuetify({
	
})

addDecorator((story,context) => ({
  vuetify: vuetifyConfig,
  template: '<v-app><story/></v-app>',
}))