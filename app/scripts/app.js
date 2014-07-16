'use strict';

/**
 * @ngdoc overview
 * @name moneyManagerApp
 * @description
 * # moneyManagerApp
 *
 * Main module of the application.
 */
angular
  .module('moneyManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/records', {
        templateUrl: 'views/records.html',
        controller: 'RecordsCtrl'
      })
      .when('/budget', {
        templateUrl: 'views/budget.html',
        controller: 'BudgetCtrl'
      })
      .otherwise({
        redirectTo: '/records'
      });
  });
