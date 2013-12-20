define(['controllers/controllers', 'services/event-service'],
  function(controllers) {
    controllers.controller('EventController', ['$scope', 'EventService',
      function($scope, EventService) {
        $scope.events = EventService.getEvents();
    }]);
});
