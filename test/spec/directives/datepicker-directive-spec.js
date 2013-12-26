define(['angular', 
        'angular-mocks',
        'directives/directives',
        'directives/datepicker-directive'], 
    function() {
     ddescribe("datepicker directives", function() {
         var element, scope;

         beforeEach(function() {
            module("directives");
            inject(function($compile, $rootScope) {
                scope = $rootScope;
                scope.defaultDate = new Date(2013, 12, 25);
                element = angular.element("<datepicker type='text' ng-model='defaultDate' id='release-date'/>");
                $compile(element)($rootScope);
            });
         });

         it("should have date value set", function() {
             scope.$digest();
             console.log(element);
             // expect(element.html()).toEqual("12/25/2013");
         });
         
     });
     
});
