/*global define*/

define([
    'jquery',
    'backbone'
    //'views/home'
], function ($, Backbone) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        	"" : "home",
        	"project": "new_project" 
        },
        home: function(){
            require(["views/home"], function(HomeView){
        	   var homeVew = new HomeView();
            });
        },
        new_project: function(){
            console.log("new project");
            require(["views/new_project"], function(NewProjectView){
        	   var newProjectView = new NewProjectView();
            });
        }
    });

    return AppRouter;
});
