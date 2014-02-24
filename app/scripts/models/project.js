/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ProjectModel = Backbone.Model.extend({
        defaults: {
        	//name: "My Portfolio",
        	//author: null
        },
        schema: {
            name : {type: 'Text', validators:['required'] },
            author: 'Text'
        }
    });

    return ProjectModel;
});
