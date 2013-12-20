define(['services/services'], function(services) {
    services.factory('SearchSettingService', 
        ['$http', '$q', function($http, $q) {
        return {
            setting: function() {
                return $http.get('/settings.json').then(function(result){
                    return result.data;
                })
            }
        }
        
        // return function() {
        //     var delay = $q.defer();
        //     $http.get('/settings.json').success(function(result) {
        //         delay.resolve(result);
        //     }).error(function(result) {
        //         delay.reject(result);
        //     });
        //     return delay.promise;
        // }
    }]);
});
