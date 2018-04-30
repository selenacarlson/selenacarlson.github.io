const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngSanitize']);

myApp.config(['$routeProvider', function($routeProvider) {
  console.log('myApp -- config');

}])
