/**
 * Created by Sheik Basha on 05-11-2016.
 */

var app = angular.module('ecommerceApp');

app.controller('loginCtrl',['$scope', function($scope){
    $scope.text = "Login Controller";

    $scope.login = function(credentials){
        console.log(credentials.username);
        console.log(credentials.password);
    };
}]);
