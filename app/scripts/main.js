/*global require*/
'use strict';

requirejs.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: '../libs/jquery/jquery',
        backbone: '../libs/backbone/backbone',
        underscore: '../libs/underscore/underscore',
        handlebars: '../libs/handlebars/handlebars',
        hbs: '../libs/require-handlebars-plugin/hbs'
    },

    hbs : {
        templateExtension : '.hbs',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : false
    }
});

requirejs([
    'backbone',
    'routes/router'
], function (Backbone, AppRouter) {
    var router = new AppRouter();
    Backbone.history.start();
});
