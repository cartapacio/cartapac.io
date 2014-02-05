/*global fooNw, Backbone*/

fooNw.Collections = fooNw.Collections || {};

(function () {
    'use strict';

    fooNw.Collections.ProjectCollection = Backbone.Collection.extend({

        model: fooNw.Models.ProjectModel

    });

})();
