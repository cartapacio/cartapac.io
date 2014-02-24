/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'models/project',
    'hbs!templates/project',
    'hbs!templates/project_form'
    //'backbone_forms'
], function ($, _, Backbone, Handlebars, ProjectModel, template, form_template) {
    'use strict';

    requireNode('backbone.nedb')(Backbone);
    
    var ProjectView = Backbone.View.extend({

    	el: '#main',
        events: {
            'submit': 'send'
        },
        template: template,
    	initialize: function(){
    		this.form = new Backbone.Form({
    			model : this.model,
    			template: form_template
    		}).render();
    		this.render();
            /*
    		this.form.on('submit', function(e){
                e.preventDefault();
    			console.log("form submition");
    		});
            */      
    	},
    	render: function(){
            this.$el.html(template);
    		this.$el.append(this.form.el);
    	},
        send: function(e){
            e.preventDefault();
            console.log("saving data");
            this.form.commit();
            this.model.save();
        }

        
    });

    return ProjectView;
});
