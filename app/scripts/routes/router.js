/*global define*/

define([
    'jquery',
    'backbone',
    '../views/home'
], function ($, Backbone, HomeView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        	"" : "home" 
        },
        home: function(){
        	var homeVew = new HomeView();
        }

    });

    return AppRouter;
});
