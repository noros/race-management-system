'use strict';
(function () {
  angular.module('cag-rms-client').directive('overviewDescription', factory);

  function factory() {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'overview/overview.description.tpl.html',
      require: '^overview',
      replace: 'true',
      link: function(scope, elem, attrs) {
      }
    };
  }
}());
