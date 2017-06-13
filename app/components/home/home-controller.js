(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.name = 'Home';
        $scope.$emit('success', 'Successfully changed state to ' + $scope.name);
    }
})();
