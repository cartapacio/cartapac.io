/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'hbs!templates/edit_project',
    'hbs!templates/new_project_form'
], function ($, _, Backbone, template, form_template) {
    'use strict';

    var EditProjectView = Backbone.View.extend({
    	el: '#main',

        events: {
            "submit": "send"
        },

    	initialize: function(){
            this.form = new Backbone.Form({
                model: this.model,
                template: form_template
            }).render();
            this.render();
    	},

    	render: function(){
    		var data = this.model.toJSON();
    		data.title = "Edit Project";
            data.subTitle = data.name

    		//console.log("model: " + JSON.stringify(data));

            this.$el.html(template(data));
            $('.content').html(this.form.el);
    	},

        send: function(e){
            e.preventDefault();
            this.form.commit();
            this.model.save();
            this.render();
        }
    });

    return EditProjectView;
});
