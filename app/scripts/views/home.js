define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!templates/home'
], function ($, _, Backbone, Handlebars, template) {
    'use strict';

    var HomeView = Backbone.View.extend({
        //template: JST['app/scripts/templates/home.hbs']
        el: "#main",
        initialize:function(){
            console.log("cartapacio home");
            this.render();
        },
        render: function(){
        	this.$el.html(template({title: 'home'}));
        }
    });

    return HomeView;
});
