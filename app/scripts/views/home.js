define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'hbs!templates/home',
    'views/project_list'
], function ($, _, Backbone, Handlebars, template, ProjectListView) {
    'use strict';

    var HomeView = Backbone.View.extend({
        el: "#main",

        initialize:function(){
            console.log("project collection: " + JSON.stringify(this.collection));
            this.render();
        },

        events: {
            "click #new-project" : "createProject"
        },

        createProject: function(){
            window.router.navigate("#project/new", {trigger: true});
        },

        render: function(){
        	this.$el.html(template({title: 'Projects', subTitle: "bang"}));

            var project_list = new ProjectListView({collection: this.collection, el:$("#projects")});

            /*
            this.collection.each(function(model){
                that.$().append(item_tpl(model.toJSON()));
            });
            */
            return this;
        }
    });
    return HomeView;
});
