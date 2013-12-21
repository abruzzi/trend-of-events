define(['controllers/controllers'], function(controllers) {
    controllers.controller('RootController', ['$scope', function($scope) {
        $scope.isHidden = true;
        $scope.toggleIt = function() {
            $scope.isHidden = !$scope.isHidden; 
        }

        $scope.title = "This is my chart";

        $scope.chartData = 
        {"title":{"text":"Trend"},"xAxis":{"categories":["2013-12-20","2013-12-21","2013-12-22","2013-12-23","2013-12-24","2013-12-25"]},"series":[{"name":"trend","data":[32,42,36,30,52,22]}]} 
    }]);

});


