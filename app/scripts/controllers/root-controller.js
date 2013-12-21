define(['controllers/controllers'], function(controllers) {
    controllers.controller('RootController', ['$scope', function($scope) {
        $scope.isHidden = true;
        $scope.toggleIt = function() {
            $scope.isHidden = !$scope.isHidden; 
        }

        $scope.isHiddenTrendChart = false;
        $scope.isHiddenVIPChart = false;

        $scope.toggleChart = function(name) {
            var toggle = "isHidden" + name + "Chart";
            $scope[toggle] = !$scope[toggle];                
            console.log($scope[toggle]);
        }
    }]);
});


