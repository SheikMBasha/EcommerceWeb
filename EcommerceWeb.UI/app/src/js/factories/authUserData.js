/**
 * Created by Sheik Basha on 26-11-2016.
 */

var app = angular.module('ecommerceApp');

app.service('authUserData', [function() {
    this.authenticationDetails = {
        isAuthenticated : false,
        userData : {}
    };
   }]);
