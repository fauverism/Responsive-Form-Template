'use strict';

/**
 * @ngdoc overview
 * @name ngResponsiveFormApp
 * @description
 * # ngResponsiveFormApp
 *
 * Main module of the application.
 */
angular
  .module('ngResponsiveFormApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .when('/kitchensink', {
        templateUrl: 'views/kitchensink.html',
        controller: 'KitchenSinkCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
