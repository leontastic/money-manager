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
    // Initialize scope variables
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
      },
      currentRecordIndex: function (index) {
        $scope.currentRecordIndex = index;
      },
      deleteRecord: function (index) {
        $scope.records.splice(index, 1);
      }
    };

    $scope.$watch('records', function (newValue) {
      console.log('# Saving moneyManagerRecords');
      localStorage.setItem('moneyManagerRecords', JSON.stringify(newValue));
    }, true);
  });
