define(['controllers/controllers', 'services/i18n-service'], function(controllers) {
    controllers.controller('LoginController', ['$scope', 'I18NService',
    function($scope, I18NService) {
        $scope.username = I18NService.prop('geo.login.username');
        $scope.password = I18NService.prop('geo.login.password');
    }]);
});

