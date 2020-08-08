const laravelNuxt = require("laravel-nuxt");
require('dotenv').config();

module.exports = laravelNuxt({
    server: {
        port: 8000, // default: 3000
        host: '192.168.15.6', // default: localhost
    },

    head: {
        title: process.env.APP_NAME || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION || ''},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css'},
            {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/animate.css@4.1.0/animate.min.css'},
        ],
        script: [],
    },

    modules: [],
    plugins: [],
    css: ['@/assets/bootstrap.css'],
});