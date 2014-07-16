'use strict';

/**
 * @ngdoc function
 * @name moneyManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moneyManagerApp
 */
angular.module('moneyManagerApp')
  .controller('MainCtrl', function ($scope, $timeout, $location) {
    $scope.locationPath = function () { return $location.path(); };
  });
