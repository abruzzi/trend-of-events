define(['services/services'], function(services) {
    services.factory('TrendService', 
        ['$http', '$q', function($http, $q) {
        return {
            trend: function() {
                var deferred = $q.defer();

                $http.get('/trend.json').success(function(data) {
                    deferred.resolve(data);
                }).error(function(error) {
                    deferred.reject("network error");
                });

                return deferred.promise;
            }
        };   
    }]);
});
