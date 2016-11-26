/**
 * Created by Sheik Basha on 05-11-2016.
 */

var app = angular.module('ecommerceApp');

app.controller('loginCtrl',['$rootScope','$scope', '$http', 'AuthFactory','$location','StorageService',
                        function($rootScope,$scope, $http, AuthFactory, $location,StorageService){

    $scope.login = function(credentials){
        var data = { username : credentials.username, password : credentials.password };
        AuthFactory.login(data).then(function(success){
            console.log('Success');
        }, function(error){
            console.log('Error');
            //$location.path(/login);
        });



    };
}]);
