const laravelNuxt = require("laravel-nuxt");
require('dotenv').config();

module.exports = laravelNuxt({
    server: {
        port: 8000, // default: 3000
        host: '192.168.15.6', // default: localhost
    },

    modules: [],
    plugins: [],
    css: ['@/assets/bootstrap.css'],
});