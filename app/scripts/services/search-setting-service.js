define(['services/services'], function(services) {
    services.factory('SearchSettingService', 
        ['$http', '$q', function($http, $q) {
        return {
            setting: function() {
                var deferred = $q.defer();
                
                $http.get('/settings.json').success(function(result) {
                    deferred.resolve(result);
                }).error(function(result) {
                    deferred.reject("network error");
                });

                return deferred.promise;
            }
        };
    }]);
});
