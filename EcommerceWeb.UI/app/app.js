/**
 * Created by Sheik Basha on 21-08-2016.
 */
//angular.module("eCommerceApp", ['ngRoute']);

var Storage = angular.module('StorageModule', []);

var app = angular.module('ecommerceApp',['ngRoute','ngStorage','StorageModule']);


app.config(function($routeProvider){
    $routeProvider.
        when('/home',
            {templateUrl: 'app/src/js/templates/home.html'})
        .when('/login',
        {
            controller: 'loginCtrl',
            templateUrl:'app/src/js/templates/login/login.html'
        })
        .otherwise({redirectTo: '/home'});
});

app.run(['$rootScope','authUserData',function($rootScope,authUserData){
   $rootScope.$on('$routeChangeStart', function(event, current, next) {
       if(authUserData.authenticationDetails.isAuthenticated) {
           window.alert('Authentication');
       }
        window.alert('Route Changed');
   });
}]);