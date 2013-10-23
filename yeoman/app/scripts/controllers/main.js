'use strict';

angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope, accelerometer) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma2',
      'Bootstrap'
    ];
    
    accelerometer.getCurrentAcceleration(
      function (acceleration) {
        $scope.acceleration = acceleration.x; 
      },
      function(e) { 
        console.log("Error finding acceleration " + e) 
      }
    );    
    
  });