/*global define*/

define([
    'jquery',
    'backbone',
    'backbone_forms'
    //'views/home'
], function ($, Backbone) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        	"" : "home",
        	"project/new": "new_project",
            "project": "pro",
            "project/nnew": "ject"
        },
        home: function(){
            require(["views/home"], function(HomeView){
        	   var homeVew = new HomeView();
            });
        },
        new_project: function(){
            console.log("new project");
            require(["views/new_project", "models/project"], 
                function(NewProjectView, ProjectModel){
        	       var newProjectView = new NewProjectView({model: new ProjectModel()});
                }
            );
        },
        pro: function(){
            requireNode('backbone.nedb')(Backbone);
            require(['models/project'], function(ProjectModel){

                var project_model = new ProjectModel();
                var form = new Backbone.Form({
                    model: project_model
                }).render();
                $('#main').append(form.el);
            });
        },
        ject: function(){
            require(['views/project', 'models/project'], 
                function(ProjectView, ProjectModel){
                    var project_model = new ProjectModel();
                    var project_view = new ProjectView({model: project_model});
                }
            );
        }

    });

    return AppRouter;
});
