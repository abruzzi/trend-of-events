require.config({
  paths: {
    'angular': 'vendor/angular.min',
    'angular-route': 'vendor/angular-route.min',
    'jquery': 'vendor/jquery',
    'underscore': 'vendor/underscore',
    'highcharts': 'vendor/highcharts'
  },
  shim: {
    'angular': {
      deps: [ 'jquery'],
      exports: 'angular'
    },
    'angular-route': {
        deps: ['angular']
    },
    'underscore': {
        exports: "underscore"
    },
    'highcharts': {
        exports: "highcharts",
        deps: ['jquery']
    }
  }
});

// the app/scripts/main.js file, which defines our RequireJS config
require([
  'angular',
  'app',
  'jquery'
],
  function (angular, app, jquery) {
    'use strict';

    jquery(function() {
      angular.bootstrap(document, ['GeoApp']);
    });
  }
);
