define(['controllers/controllers', 
        'services/search-setting-service'], function(controllers) {
   controllers.controller('SearchSettingController', 
       ['$scope', 'SearchSettingService', function($scope, SearchSettingService) {
        SearchSettingService.setting().then(function(setting) {
            $scope.setting = setting;
        })
   }]) 
});
