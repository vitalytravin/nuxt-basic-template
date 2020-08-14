import Signupform from './Signupform';

import '../.storybook/vuetify.decorator.js'


export default {
  title: 'Auth/Signupform',
  component: Signupform,
  argTypes: {
    bgColor: { control: 'color' },
    fgColor: { control: 'color' },
  },
 
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Signupform },
  template: '<signupform @onSignup="onSignup" @onSignin="onSignin" />',
});

export const Default = Template.bind({});
Default.args = {
  
};


