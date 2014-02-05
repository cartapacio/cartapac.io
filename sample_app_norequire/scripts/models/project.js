/*global fooNw, Backbone*/

fooNw.Models = fooNw.Models || {};

(function () {
    'use strict';

    fooNw.Models.ProjectModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
