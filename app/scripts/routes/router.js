/*global define*/

define([
    'jquery',
    'backbone',
    'backbone_forms'
    //'views/home'
], function ($, Backbone) {
    'use strict';
    requireNode('backbone.nedb')(Backbone);
    var AppRouter = Backbone.Router.extend({
        routes: {
        	"" : "home",
        	"project/new": "new_project",
            "project/:id/edit": "edit_project"
        },
        home: function(){
            require(["views/home", "models/project", "collections/projects"], 
                function(HomeView, ProjectModel, ProjectsCollection){
                    var project_collection = new ProjectsCollection();
                    project_collection.fetch({
                        data: {type: "project"},
                        success: function(mod, res, ops){
                            console.log("collection fetched: " + JSON.stringify(mod));
                        }
                    })
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
                    var project_model = new ProjectModel({"_id":id });
                    project_model.fetch({
                        success: function(mod){
                            //console.log("Bang: " + JSON.stringify(mod));
                            console.log("Bang: " + mod.id);

                            var project_view = new EditProjectView({model: mod});

                        }
                    });

                });
        }

    });

    return AppRouter;
});
