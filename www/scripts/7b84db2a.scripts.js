"use strict";angular.module("yeomanApp",["btford.phonegap.accelerometer"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("yeomanApp").controller("MainCtrl",["$scope","accelerometer",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma2"],b.getCurrentAcceleration(function(b){a.acceleration=b.x},function(a){console.log("Error finding acceleration "+a)})}]);