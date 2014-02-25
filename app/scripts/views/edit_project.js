/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!templates/edit_project'
], function ($, _, Backbone, template) {
    'use strict';

    var EditProjectView = Backbone.View.extend({
    	el: '#main',
    	initialize: function(){
    		this.render();
    	},
    	render: function(){
    		var data = this.model.toJSON();
    		data.title = "Edit Project";
    		console.log("model: " + JSON.stringify(data));
    		this.$el.html(template(data));
    	}
    });

    return EditProjectView;
});
