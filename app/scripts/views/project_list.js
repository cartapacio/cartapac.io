/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!templates/project_list'
], function ($, _, Backbone, Handlebars, template) {
    'use strict';

    var ProjectListView = Backbone.View.extend({
    	initialize: function(){
    		this.render();
    	},

    	render:function(){
    		this.$el.html(template({projects: this.collection.toJSON()}));
    		return this;
    	}
    });
    return ProjectListView;
});
