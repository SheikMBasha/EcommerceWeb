/**
 * Created by Sheik Basha on 19-11-2016.
 */

var app = angular.module('ecommerceApp');

app.factory('AuthFactory', ['$q','$http','authUserData', function($q,$http,authUserData){

    var userInfo = {};
    var token = {};

    return {
        login : function(credentials) {
            var deferred = $q.defer();
            var data = { username : credentials.username, password : credentials.password };
            var url = "http://ekartauthservice/api/Authenticate/Login";
            $http({
                method: 'POST',
                url: url,
                data: data
            }). then( function(result){
                authUserData.authenticationDetails.isAuthenticated = true;
                authUserData.authenticationDetails.userData = result.data;
                deferred.resolve(null);
            }, function(error){
                authUserData.authenticationDetails.isAuthenticated = false;
                authUserData.authenticationDetails.userData = {};
                deferred.resolve(error);
            });

            return deferred.promise;
        },

        logOut : function() {
            authUserData.authenticationDetails.isAuthenticated = false;
            authUserData.authenticationDetails.userData = {};
        }
    };
}]);
