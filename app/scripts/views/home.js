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
        render: function(){
        	this.$el.html(template({title: 'home'}));
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
