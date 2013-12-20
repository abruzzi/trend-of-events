define(['services/services'],
  function(services) {
    services.factory('EventService', [
      function() {
        return {
          getEvents: function() {
            return ['call-failure', 'call-success', 'call-handover'];
          }
        };
      }]);
  });
