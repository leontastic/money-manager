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
    if (localStorage.getItem('moneyManagerRecords')) {
      console.log(localStorage.getItem('moneyManagerRecords'));
      $scope.records = JSON.parse(localStorage.getItem('moneyManagerRecords'));
    } else {
      $scope.records = [];
    }
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

    $scope.$watch('records', function (newValue, oldValue) {
      console.log('# Saving moneyManagerRecords');
      localStorage.setItem('moneyManagerRecords', JSON.stringify(newValue));
    }, true);
  });
