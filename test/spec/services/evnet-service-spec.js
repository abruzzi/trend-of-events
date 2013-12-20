define(['angular', 'angular-mocks', 'services/services', 'services/event-service'],
  function() {
    describe('EventService Service', function() {
      beforeEach(module('services'));

      var eventService;
      beforeEach(inject(function(EventService) {
        eventService = EventService;
      }));

      it('should have user', function() {
        expect(eventService.getEvents().length).toEqual(3);
        expect(eventService.getEvents()[0]).toEqual('call-failure');
      });
    });
  });
