define(['angular',
        'angular-mocks',
        'services/services',
        'services/event-service'
    ],
    function() {
        describe('EventService Service', function() {
            var eventService;
            beforeEach(function() {
                module('services');

                inject(function(EventService) {
                    eventService = EventService;
                });
            });

            it("should have getEvents method", function() {
                expect(angular.isFunction(eventService.getEvents)).toBe(true);
            });

            it('should have events', function() {
                var events = eventService.getEvents();
                expect(events.length).toEqual(3);
                expect(events[0]).toEqual('call-failure');
            });
        });
    });