(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('Link1Ctrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.name = 'Link 1';
    }
})();
