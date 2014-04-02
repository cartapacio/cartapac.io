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
        // handlebars: {
        //     exports: 'Handlebars'
        // }
    },
    paths: {
        jquery: '../libs/jquery/jquery',
        backbone: '../libs/backbone/backbone',
        underscore: '../libs/underscore/underscore',
        hbs: '../libs/require-handlebars-plugin/hbs',
        handlebars: '../libs/handlebars/handlebars.amd.min',
        i18nprecompile : "../libs/require-handlebars-plugin/hbs/i18nprecompile",
        json2 : "../libs/require-handlebars-plugin/hbs/json2",
        backbone_forms: '../libs/backbone-forms/distribution.amd/backbone-forms',
        bootstrap3: 'templates/form_tpl/bootstrap3',

        templates: 'templates',
        routers: 'routes',
        views: 'views',
        models: 'models',
        collections: 'collections',
        config: 'config',
        utils: 'utils'
    },

    locale: "en_us",

    hbs : {
        templateExtension : 'hbs',
        helpers: true,
        i18n: true,
        partialsUrl: '../templates/partials',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : false
    }
});

//

require([
    'backbone',
    'routers/router',
    'config/defaults',
    'utils/check_workspace',
], function (Backbone, AppRouter, defaults, workspace) {
    //node libs
    var Datastore = requireNode('nedb');
    var util = requireNode('util')
    var path = requireNode('path')


    //check for user working directory
    var user_space = new workspace(function (success, w_path, data){
        if(!success){
            util.error(data)
        } else {
            util.debug(data)

            //export user workspace w_path
            global.user_workspace = w_path

            global.user_db = new Datastore({
                filename : path.resolve('user', 'db', 'user_db'),
                autoload: true
            });
        }
    })

    var main_db =  path.resolve('app', 'db', defaults.main_db);

    //console.log("main db: " + main_db);

    global.db = new Datastore({
        filename : main_db,
        autoload: true
    });

    console.log("db: " + global.db);
    window.router = new AppRouter();
    Backbone.history.start();
});
