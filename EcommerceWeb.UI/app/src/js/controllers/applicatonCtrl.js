/**
 * Created by Sheik Basha on 19-11-2016.
 */


var app = angular.module('ecommerceApp');

app.controller('ApplicationController', ['$scope', 'authUserData',function($scope, authUserData){

    $scope.user = {};

    var userData = authUserData.authenticationDetails.userData
    if (userData.FirstName !== undefined ) {
        $scope.user.FirstName = userData.FirstName;
    }

    //if(userData!== undefined && userData.)

}]);