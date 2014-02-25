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
            "project/:id/edit": "edit_project"
        },
        home: function(){
            require(["views/home"], function(HomeView){
        	   var homeVew = new HomeView();
            });
        },
        new_project: function(){
            require(['views/new_project', 'models/project'], 
                function(NewProjectView, ProjectModel){
                    var project_model = new ProjectModel();
                    var project_view = new NewProjectView({model: project_model});
                }
            );
        },
        edit_project: function(id){
            require(['models/project', 'views/edit_project'], 
                function(ProjectModel, EditProjectView){
                    var project_model = new ProjectModel();
                    project_model.fetch({
                        data: {"_id": id},
                        success: function(mod){
                            console.log("Bang: " + mod);
                            var project_view = new EditProjectView({model: mod});

                        }
                    });

                });
        }

    });

    return AppRouter;
});
