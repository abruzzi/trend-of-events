define(['directives/directives', 'jquery', 'highcharts'], function(directives, jquery, highcharts) {
    directives.directive('highchart', function() {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                chartData: "=value"
            },

            transclude:true,
            replace: true,

            link: function (scope, element, attrs) {
              var chartsDefaults = {
                chart: {
                  renderTo: element[0],
                  type: attrs.type || null,
                  height: attrs.height || null,
                  width: attrs.width || null
                }
              };
              
              //Update when charts data changes
              scope.$watch(function() { return scope.chartData; }, function(value) {
                if(!value) return;
                var deepCopy = true;
                var newSettings = {};
                
                jquery.extend(deepCopy, newSettings, chartsDefaults, scope.chartData);

                new Highcharts.Chart(newSettings);
              });
            }
        };
    });
});
