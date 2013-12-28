define(['directives/directives', 
        'jquery', 
        'jquery-ui'], function(directives) {
    'use strict';
    directives.directive('datepicker', function ($parse) {
       return {
          restrict: "E",
          replace: true,
          transclude: true,
          scope: {
            date: "="
          },
          template: "<input type='text' ng-transclude></input>",
          link: function(scope, element, attrs) {
            var updateDate = function() {
                var date = element.datepicker("getDate");
                scope.$apply(function() {
                    scope.date = date;
                });
            };

            $(element).datepicker({
                inline: true,
                onClose: updateDate,
                onSelect: updateDate
            });

            $(element).datepicker("setDate", new Date(scope.date));
            
            scope.$watch('date', function(value) {
                var date = new Date(value);
                element.datepicker("setDate", date);
            });
          }
       };
    });
});
