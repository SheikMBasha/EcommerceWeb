/**
 * Created by Sheik Basha on 21-08-2016.
 */
//angular.module("eCommerceApp", ['ngRoute']);

var app = angular.module('ecommerceApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.
        when('/home',
            {templateUrl: 'app/src/js/templates/home.html'})
        .otherwise({redirectTo: '/home'});
});