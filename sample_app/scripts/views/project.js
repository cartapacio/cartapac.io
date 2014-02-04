/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ProjectView = Backbone.View.extend({
        template: JST['app/scripts/templates/project.hbs']
    });

    return ProjectView;
});
