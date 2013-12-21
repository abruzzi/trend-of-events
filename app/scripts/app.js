// The app/scripts/app.js file, which defines our AngularJS app
define(['angular', 
  'angular-route',
  'services/services', 
  'controllers/controllers',
  'controllers/root-controller',
  'controllers/event-controller',
  'controllers/search-setting-controller',
  'controllers/trend-controller',
  'directives/directives',
  'directives/hide-directive',
  'directives/expander-directive',
  'directives/high-chart-directive'], function (angular) {
    'use strict';
    var app = angular.module('GeoApp', ['controllers', 'services', 'directives', 'ngRoute']);

    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/root.html',
            controller: 'RootController'
        }).when('/events', {
          templateUrl: 'views/events.html',
          controller: 'EventController'
        }).when('/settings', {
          templateUrl: 'views/settings.html',
          controller: 'SearchSettingController'
        }).when('/trend', {
          templateUrl: 'views/trend.html',
          controller: 'TrendController'
        }).otherwise('/');
      }
    ]);

    return app;
});
