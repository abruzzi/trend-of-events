define(['directives/directives'], function(directives) {
    directives.directive('expander', function() {
        return {
            restrict: "EA",
            replace: true,
            transclude: true,
            scope: {title: "=expanderTitle"},
            templateUrl: 'views/expander.html', 
            link: function(scope, element, attrs) {
                var titleElement = angular.element(element.children().eq(0));
                var bodyElement = angular.element(element.children().eq(1));

                titleElement.bind('click', toggle);
                function toggle() {
                    bodyElement.toggleClass('closed');
                }
            }
        }
    })
});
