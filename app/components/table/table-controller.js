(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('TableCtrl', Controller);

    Controller.$inject = ['$scope', 'TableSrvc'];

    function Controller($scope, TableSrvc) {

        $scope.name = 'Table';
        $scope.$emit('success', 'Successfully changed state to ' + $scope.name);

        $scope.items = TableSrvc.getItems();

    }
})();
