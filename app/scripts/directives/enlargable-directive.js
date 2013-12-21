define(['directives/directives'], function(directives) {
    directives.directive('enlargable', function() {
        return function(scope, element, attrs) {
            scope.$watch(attrs.enlargable, function(newval) {
                if(newval) {
                    element.width(element.width() * 2);
                    element.height(element.height() * 2);
                } else {
                    element.width(element.width() / 2);
                    element.height(element.height() / 2);
                }
            });
        }
    })
})
