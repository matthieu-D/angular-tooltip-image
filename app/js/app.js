'use strict';
/* App Module */

angular.module('angularcustomtooltip', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'views/directive-test.html'}).
      otherwise({redirectTo: '/'});
}]);
