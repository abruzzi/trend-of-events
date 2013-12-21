define(['controllers/controllers', 
        'services/trend-service',
        "underscore"], function(controllers) {
    controllers.controller('TrendController', 
        ['$scope', 'TrendService', function($scope, trendService) {
            var options = {
                title: {
                    text: "Trend"
                },
                xAxis: {
                    categories: null
                },
                series: [
                    {name: null}
                ]
            };

            trendService.trend().then(function(data){
                var dates = _.pluck(data.trend, "date");
                var values = _.pluck(data.trend, "value");

                options.xAxis.categories = dates;
                options.series[0].name = "trend";
                options.series[0].data = values;

                $scope.chartData = options;
            });
        }]);
});

