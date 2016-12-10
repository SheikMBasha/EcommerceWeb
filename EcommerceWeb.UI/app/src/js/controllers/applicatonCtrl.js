/**
 * Created by Sheik Basha on 19-11-2016.
 */


var app = angular.module('ecommerceApp');

app.controller('ApplicationController', ['$scope', 'authUserData',function($scope, authUserData){

    $scope.user = {
        isAuthenticated : false
    };

    $scope.$on('LoginSuccess',function(event,data){
        console.log('App Ctrl , login data:' + data);
        $scope.user = data.authenticationDetails;
    });

    $scope.user = {
        isAuthenticated : false
    };

    //var userData = authUserData.authenticationDetails.userData;
    //if (authUserData.authenticationDetails.isAuthenticated && userData.FirstName !== undefined  ) {
    //    $scope.user.isAuthenticated = true;
    //    $scope.user.FirstName = userData.FirstName;
    //}

    //if(userData!== undefined && userData.)

}]);