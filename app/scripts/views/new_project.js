/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'models/project',
    'routers/router',
    'hbs!templates/new_project',
    'hbs!templates/new_project_form'
    //'backbone_forms'
], function ($, _, Backbone, Handlebars, ProjectModel, AppRouter, template, form_template) {
    'use strict';

    requireNode('backbone.nedb')(Backbone);
    
    var NewProjectView = Backbone.View.extend({

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
    	},
    	render: function(){
            this.$el.html(template({title: 'New project'}));
    		this.$el.append(this.form.el);
    	},
        send: function(e){
            e.preventDefault();
            this.form.commit();
            this.model.save();

            this.model.fetch({
                success: function(mod, res){
                    console.log("fetched: + "+ mod.id);
                    router.navigate("project/" + mod.id + "/edit", {trigger: true})

                }
            });
        }
    });

    return NewProjectView;
});
