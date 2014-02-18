/*global define*/

define([
    'jquery',
    'backbone',
    'views/home'
], function ($, Backbone, HomeView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        	"" : "home",
        	"project/new": "new_project" 
        },
        home: function(){
        	var homeVew = new HomeView();
        },
        new_project: function(){
        	var newProjectView()
        }
    });

    return AppRouter;
});
