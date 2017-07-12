(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('TableCtrl', Controller);

    Controller.$inject = ['$scope', 'TableSrvc'];

    function Controller($scope, TableSrvc) {

        $scope.name = 'Table';
        $scope.$emit('success', 'Successfully changed state to ' + $scope.name);

        $scope.items = TableSrvc.getItems();

        $scope.dtOptions = {
            paginationType: 'full',
            displayLength: 20,
            dom: 'irtp'
        };

        $scope.columns = [
            {header: 'Name', itemField: 'name'},
            {header: 'Address', itemField: 'address'},
            {header: 'City', itemField: 'city'},
            {header: 'State', itemField: 'state'}
        ];

        $scope.config = {
            selectionMatchProp: 'name',
            itemsAvailable: true,
            showCheckboxes: false
        };

    }
})();
