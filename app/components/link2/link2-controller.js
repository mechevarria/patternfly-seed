(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('Link2Ctrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.name = 'Link 2';
        $scope.$emit('success', 'Successfully changed state to ' + $scope.name);
    }
})();
