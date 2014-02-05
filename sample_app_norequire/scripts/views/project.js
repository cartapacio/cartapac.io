/*global fooNw, Backbone, JST*/

fooNw.Views = fooNw.Views || {};

(function () {
    'use strict';

    fooNw.Views.ProjectView = Backbone.View.extend({

        template: JST['app/scripts/templates/project.hbs']

    });

})();
