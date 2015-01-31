'use strict';

define(['angular', 'app'], function(angular, app) {

    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/index', {
            templateUrl: '/apps/app/partials/index.html',
            controller: 'InitCtrl'
        });
        $routeProvider.when('/view2', {
            templateUrl: '/apps/app/partials/partial2.html',
            controller: 'MyCtrl2'
        });
        $routeProvider.otherwise({redirectTo: '/index'});
    }]);

});
