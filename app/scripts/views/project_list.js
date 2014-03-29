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

        events:{
            'click .edit' : 'edit',
            'click .delete' : 'delete'
        },

        edit: function(e){
            e.preventDefault();
            var id = $(e.currentTarget).data("id")
            console.log(id)
            router.navigate('#project/'+id+'/edit', {trigger: true})
        },

        delete: function(e){
            e.preventDefault();
            var id = $(e.currentTarget).data("id")
            //TODO
        },

    	render:function(){
    		this.$el.html(template({projects: this.collection.toJSON()}));
    		return this;
    	}
    });
    return ProjectListView;
});
