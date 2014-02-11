/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!../templates/home'
], function ($, _, Backbone, Handlebars, tpl) {
    'use strict';

    var HomeView = Backbone.View.extend({
        //template: JST['app/scripts/templates/home.hbs']
        render: function(){
        	this.$el.html(tpl);
        }
    });

    return HomeView;
});
