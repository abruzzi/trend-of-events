define(['angular', 
        'angular-mocks',
        'controllers/controllers',
        'controllers/root-controller'], 
        function() {
            describe("Root Controller", function() {
                var scope, controller;

                beforeEach(function() {
                    module('controllers');
                    inject(function($rootScope, $controller) {
                        scope = $rootScope.$new();
                        controller = $controller('RootController', {$scope: scope});
                    });
                });

                it("should have a title", function() {
                    expect(scope.title).toEqual("This is my chart");
                });

                it("should hidden", function() {
                    expect(scope.isHidden).toBeTruthy();
                });

                it("should toggle hidden", function() {
                    scope.toggleIt();
                    expect(scope.isHidden).toBeFalsy();
                });
            }); 
});
