define(['angular',
        'directives/directives',
        'directives/high-chart-directive'], function() {
    describe("highcharts directive", function() {
        var element;
        var scope;

        var chartData = {"title":{"text":"Trend"},"xAxis":{"categories":["2013-12-20","2013-12-21","2013-12-22","2013-12-23","2013-12-24","2013-12-25"]},"series":[{"name":"trend","data":[32,42,36,30,52,22]}]};

        beforeEach(function() {
            module("directives");
            inject(function($compile, $rootScope) {
                 scope = $rootScope;
                 scope.chartData = chartData;
                 element = angular.element("<highchart value='chartData' type='line' width='800' height='400'></highchart>");
                 $compile(element)($rootScope);
            });
        });

        it("should render chart", function() {
            scope.$digest();
            expect(element.find(".highcharts-container").length).toEqual(1);
        });
    });
});
