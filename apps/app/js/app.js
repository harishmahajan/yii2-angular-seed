'use strict';

define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'angularRoute',
    ], function (angular, filters, services, directives, controllers) {

        // Declare app level module which depends on filters, and services

        return angular.module('oc', [
            'ngRoute',
            'oc.filters',
            'oc.services',
            'oc.directives',
            'oc.controllers'
        ]);
});
