/*global define*/

define([
    'underscore',
    'backbone',
    'models/project'
], function (_, Backbone, ProjectModel) {
    'use strict';

    var ProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel
    });
    return ProjectsCollection;
});