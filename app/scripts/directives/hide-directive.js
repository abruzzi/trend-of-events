define(['directives/directives'], function(directives) {
    directives.directive('hideMe', function() {
        return function(scope, element, attrs) {
            scope.$watch(attrs.hideMe, function(newval) {
                if(newval) {
                    element.hide();
                } else {
                    element.show();
                }
            });
        }
    })
})
