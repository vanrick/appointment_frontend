var app = angular.module("Nails Bar", ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .otherwise({     redirectTo: '/login'});
      $locationProvider.html5Mode(true)
});
