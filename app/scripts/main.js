require.config({
  paths: {
    'angular': 'vendor/angular.min',
    'angular-route': 'vendor/angular-route.min',
    'jquery': 'vendor/jquery',
    'jquery-ui': 'vendor/jquery-ui.min',
    'jquery-i18n-properties': 'vendor/jquery.i18n.properties',
    'underscore': 'vendor/underscore',
    'highcharts': 'vendor/highcharts'
  },
  shim: {
    'angular': {
      deps: [ 'jquery'],
      exports: 'angular'
    },
    'jquery-ui': {
      deps: ['jquery']
    },
    'jquery-i18n-properties': {
        deps: ['jquery']
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
