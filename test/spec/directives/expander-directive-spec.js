define(['angular',
        'directives/directives',
        'directives/expander-directive'], function() {
    describe("expander directives", function() {
        var element, scope;
        beforeEach(function() {
            module('directives');
            module('views/expander.html');

            inject(function($compile, $rootScope) {
                scope = $rootScope;
                scope.title = "great title for click";
                element = angular.element("<expander expander-title='title'><span>Content</span></expander>");
                $compile(element)($rootScope);
            });
        });


        it("should generate an expander", function() {
            scope.$digest();
            expect(element.find('.title').text()).toContain("great title for click");
        });
    });        
});
