// The app/scripts/app.js file, which defines our AngularJS app
define(['angular', 
  'angular-route',
  'services/services', 
  'services/event-service', 
  'controllers/controllers',
  'controllers/event-controller',
  'directives/directives'], function (angular) {
    'use strict';
    var app = angular.module('GeoApp', ['controllers', 'services', 'directives', 'ngRoute']);

    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'views/events.html',
          controller: 'EventController'
        });
      }
    ]);

    return app;
});
