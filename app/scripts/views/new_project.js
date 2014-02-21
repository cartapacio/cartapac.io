/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!templates/new_project',
    'models/project'
], function ($, _, Backbone, Handlebars, template, ProjectModel) {
    'use strict';
	        
    requireNode('backbone.nedb')(Backbone);

    var NewProjectView = Backbone.View.extend({
        el: "#main",
        events:{
        	"submit": "save_project"
        },
        initialize: function(){
        	this.render();
        },
        render: function(){
        	this.$el.html(template({title:'New Project'}));
        },


	    //Auxiliar function
	    getFormData: function(form) { 
	        var unindexed_array = form.serializeArray();
	        var indexed_array = {};

	        $.map(unindexed_array, function(n, i){
	            indexed_array[n['name']] = n['value'];
	        });

	        return indexed_array;
	    },

	    save_project: function(e){
            e.preventDefault();
            console.log("saved");
            //var form_data = JSON.stringify( this.getFormData( this.$el.find('form') ) );
            var form_data = this.getFormData( this.$el.find('form') );
            console.log("form data: " + form_data);

            this.model.save(form_data);
            return false  
	    }
    });
    return NewProjectView;
});