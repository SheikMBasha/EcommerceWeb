/**
 * Created by Sheik Basha on 19-11-2016.
 */

var storage = angular.module('StorageModule');

storage.factory('StorageService', ['$localStorage',function($localStorage) {

        var storageService = {};

        var browserSupportsLocalStorage = function() {
            try {
                return ( 'localStorage' in window && window['localStorage'] !== null ) ;
            } catch (e) {
                $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
                return false;
            }
        };

    storageService.addToLocalStorage = function(key, value) {
            if(browserSupportsLocalStorage()) {
                if(typeof value == undefined) {
                    value = null;
                }
                if(angular.isObject(value) || angular.isArray(value)) {
                    value = angular.toJson(value);
                }
                //$localStorage.Add(key, value);
                $localStorage.key = value;
                return true;
            }
            return false;
        };


    return storageService;
}]);
