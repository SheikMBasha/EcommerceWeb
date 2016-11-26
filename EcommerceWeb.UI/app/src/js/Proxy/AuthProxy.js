/**
 * Created by Sheik Basha on 26-11-2016.
 */

var app = angular.module('ecommerceApp');

app.factory('authProxy', ['$q','$http',function($http, $q){

    var authProxy = {};

    authProxy.Authenticate = function(credentials){

    };

    return authProxy;

}]);
