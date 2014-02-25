/*global require*/
'use strict';

require.config({
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
        hbs: '../libs/require-handlebars-plugin/hbs',
        backbone_forms: '../libs/backbone-forms/distribution.amd/backbone-forms',
        bootstrap3: 'templates/form_tpl/bootstrap3',

        templates: 'templates',
        routers: 'routes',
        views: 'views',
        models: 'models',
        collections: 'collections'
    },

    hbs : {
        templateExtension : 'hbs',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : false
    }
});

require([
    'backbone',
    'routers/router'
], function (Backbone, AppRouter) {
    var Datastore = requireNode('nedb');
    
    global.db = new Datastore({
        filename : "app/db/cartapacio.db",
        autoload: true
    });

    //console.log("db" + db);
    window.router = new AppRouter();
    Backbone.history.start();
});
