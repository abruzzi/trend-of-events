define(['angular',
        'angular-mocks',
        'services/services',
        'services/search-setting-service'
    ],
    function() {
        describe('Search Setting Service', function() {
            var settingService;
            var httpBackend;

            beforeEach(function() {
                module('services');

                inject(function(SearchSettingService, $httpBackend) {
                    settingService = SearchSettingService;
                    httpBackend = $httpBackend;
                });
            });

            afterEach(function() {
                httpBackend.verifyNoOutstandingExpectation();
                httpBackend.verifyNoOutstandingRequest();
            });

            it("should have setting method", function() {
                expect(angular.isFunction(settingService.setting)).toBe(true);
            });

            it('should have settings from http request', function() {
                var result;
                var expected = {
                    "period": "day",
                    "date": "Sat Dec 21 12:56:53 EST 2013",
                };

                httpBackend.expectGET('/settings.json').respond(expected);

                var promise = settingService.setting();
                promise.then(function(data) {
                    result = data;
                });

                httpBackend.flush();

                expect(result).toEqual(expected);
            });


            it("should throw error when network expection", function() {
                var result, error;
                httpBackend.expectGET('/settings.json').respond(500);

                var promise = settingService.setting();
                promise.then(function(data) {
                    result = data;
                }, function(data) {
                    error = data;
                });

                httpBackend.flush();

                expect(result).toBeUndefined();
                expect(error).toEqual("network error");
            });
        });
    });