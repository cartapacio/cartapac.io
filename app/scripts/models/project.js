/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProjectModel = Backbone.Model.extend({
        idAttribute: "_id",
        defaults: {
            type: 'project',
            objects: []
        },
        schema: {
            name : {type: 'Text', validators:['required'] },
            author: 'Text',
            ftp_host: 'Text',
            ftp_user: 'Text',
            ftp_password: 'Text'
        }
    });

    return ProjectModel;
});
