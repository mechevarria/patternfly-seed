(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('CardCtrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.name = 'Card';
        $scope.$emit('success', 'Successfully changed state to ' + $scope.name);
    }
})();
