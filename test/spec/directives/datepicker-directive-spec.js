define(['angular', 
        'angular-mocks',
        'directives/directives',
        'directives/datepicker-directive'], 
    function() {
     describe("datepicker directives", function() {
         var element, scope;

         beforeEach(function() {
            module("directives");
            inject(function($compile, $rootScope) {
                scope = $rootScope;
                scope.defaultDate = "2013/12/25";
                element = angular.element("<datepicker type='text' date='defaultDate' id='release-date'/>");
                $compile(element)($rootScope);
            });
         });

         it("should have date value set", function() {
             scope.$digest();
             expect(element.val()).toEqual("12/25/2013");
         });
         
     });
     
});
