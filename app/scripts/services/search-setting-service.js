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
    }]);
});
