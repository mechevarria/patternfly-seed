(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('Link3Ctrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.name = 'Link 3';
    }
})();
