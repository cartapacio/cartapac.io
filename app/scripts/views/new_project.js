/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!templates/new_project'
], function ($, _, Backbone, Handlebars, template) {
    'use strict';

    var NewProjectView = Backbone.View.extend({
        el: "#main",
        initialize: function(){
        	console.log("cartapacio new project");
        	this.render();
        },
        render: function(){
        	this.$el.html(template({title:'New Project'}));
        }

    });

    return NewProjectView;
});