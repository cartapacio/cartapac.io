/*global define*/

define([
    'jquery',
    'backbone',
    'backbone_forms',
    'config/defaults'
], function ($, Backbone, defaults) {
    'use strict';
    requireNode('backbone.nedb')(Backbone);
    
    //console.log("db: " + db);
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
                    global.db.find({type:"project"},function(err, docs){
                        project_collection.reset(docs);
                        var homeView = new HomeView({collection: project_collection});
                    });   
            });
        },
        
        new_project: function(){
            require(['views/new_project', 'models/project'], 
                function(NewProjectView, ProjectModel){
                    var project_model = new ProjectModel();
                    var project_view = new NewProjectView({model: project_model});
            });
        },
        
        edit_project: function(id){
            console.log("project id: " + id);
            require(['models/project', 'views/edit_project'], 
                function(ProjectModel, EditProjectView){
                    console.log("edit pro");
                    var project_model = new ProjectModel({"_id":id });
                    project_model.fetch({
                        success: function(project){
                            var project_view = new EditProjectView({model: project});
                        }
                    });

            });
        }

    });

    return AppRouter;
});
