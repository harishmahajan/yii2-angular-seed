'use strict';
var bowerPath = '../../vendor/bower/';
require.config({
    paths: {
        angular         : bowerPath + 'angular/angular',
        angularRoute     : bowerPath + 'angular-route/angular-route',
        d3                 : bowerPath + 'd3/d3.min',
        d3Cloud         : bowerPath + 'd3-cloud/d3.layout.cloud'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'd3Cloud': ['d3']
    },
    priority: [
        "angular"
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
    'angular',
    'app',
    'routes'
], function(angular, app, routes) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });
});
