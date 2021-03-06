/**
 * Created by Sheik Basha on 21-08-2016.
 */
//angular.module("eCommerceApp", ['ngRoute']);

var Storage = angular.module('StorageModule', []);

var app = angular.module('ecommerceApp',['ui.router','ngStorage','StorageModule']);


app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

        $stateProvider.
            state('home', {
                url: '/home',
                templateUrl: 'app/src/js/templates/home.html',
                params: {
                    AuthenticationRequired: true
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/src/js/templates/login/login.html',
                controller: 'loginCtrl',
                params: {
                    AuthenticationRequired: false
                }
            })
});

app.run(['$rootScope','$state','authUserData', function($rootScope,$state,authUserData){
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams){
        var routeAuthentication = toState.params.AuthenticationRequired;
        if(routeAuthentication) {
            evt.preventDefault();
            $state.go('login');
        }
    });
}]);



//app.config(function($routeProvider){
//    $routeProvider.
//        when('/home',
//            {templateUrl: 'app/src/js/templates/home.html'})
//        .when('/login',
//        {
//            controller: 'loginCtrl',
//            templateUrl:'app/src/js/templates/login/login.html'
//        })
//        .otherwise({redirectTo: '/home'});
//});

//app.run(['$rootScope','authUserData',function($rootScope,authUserData){
//   $rootScope.$on('$routeChangeStart', function(event, current, next) {
//       if(authUserData.authenticationDetails.isAuthenticated) {
//           window.alert('Authentication');
//       }
//        window.alert('Route Changed');
//   });
//}]);