import { i18n } from './i18n.setup' 

//BUG. init set local work. does not work when change local through toolbar. does not create a new component but uses the old one
export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'ru', right: 'ru', title: 'Русский' },
                { value: 'en', right: '🇺🇸', title: 'English' },

            ],
        },
    },
};

export const i18nDecorator = (story, context) => ({
    template: '<story/>',
    // render: (h) => h(story()),
    // functional: true,
    i18n,
    mounted() {
        this.$i18n.locale = context.globals.locale
    }
})  