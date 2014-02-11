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
        	console.log("this is home");
        	var homeVew = new HomeView();
        }

    });

    return AppRouter;
});
