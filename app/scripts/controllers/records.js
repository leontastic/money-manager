'use strict';

/**
 * @ngdoc function
 * @name moneyManagerApp.controller:RecordsCtrl
 * @description
 * # RecordsCtrl
 * Controller of the moneyManagerApp
 */
angular.module('moneyManagerApp')
  .controller('RecordsCtrl', function ($scope) {
    $scope.records = [];
    $scope.draftRecord = {};

    // Functions for saving and updating records
    $scope.recordFunction = {
      chooseType: function (type) {
        $scope.draftRecord.recordType = type;
      },
      saveRecord: function () {
        $scope.records.push($scope.draftRecord);
        $scope.draftRecord = {};
      }
    };
  });
