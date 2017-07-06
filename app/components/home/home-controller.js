(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.name = 'Home';

        $scope.config = {
            icon: 'fa fa-arrow-circle-left',
            title: 'PatternFly Seed',
            info: 'Click one of the links on the left to get started.'
        };
    }
})();
