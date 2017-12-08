var app = angular.module('RealEstateApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/forRent', {
        templateUrl: '/views/forRent.html',
        controller: 'ForRentController as vm'
    }).when('/forSale', {
        templateUrl: '/views/forSale.html',
        controller: 'ForSaleController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});