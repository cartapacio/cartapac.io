/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!../templates/home'
], function ($, _, Backbone, Handlebars, template) {
    'use strict';

    var HomeView = Backbone.View.extend({
        el: "#main",
        initialize:function(){
            console.log("cartapacio home");
            this.render();
        },
        render: function(){
        	this.$el.html(template());
        }
    });

    return HomeView;
});
