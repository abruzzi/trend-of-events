define(['angular', 
        'angular-mocks',
        'controllers/controllers',
        'controllers/search-setting-controller'], 
        function() {
            'use strict';
            describe("Search Setting controller", function($q) {
                var scope;
                var q;
                var controllerFactory;
                var mockService = {};

                var setting = { 
                    "period": "day", 
                    "date": "Sat Dec 21 00:48:54 EST 2013", 
                    "vendors": ["cisco", "huawei"] 
                }

                beforeEach(function() {
                    module('controllers');
                    inject(function($rootScope, $controller, $q) {
                        controllerFactory = $controller;
                        scope = $rootScope.$new();
                        q = $q;
                    });
                });

                beforeEach(function() {
                    var deferred = q.defer();
                    deferred.resolve(setting);
                    mockService.setting = jasmine.createSpy('setting');
                    mockService.setting.andReturn(deferred.promise);
                });

                function initController() {
                    return controllerFactory('SearchSettingController', {
                        $scope: scope,
                        SearchSettingService: mockService
                    });
                }

                it("should have a vendor in scope", function() {
                    initController();
                    scope.$digest();
                    expect(scope.currentVendor).toEqual("cisco");
                });

                it("should have a setting in scope", function() {
                    initController();
                    scope.$digest();
                    expect(scope.setting).toEqual(setting);
                })
            }); 
        });
