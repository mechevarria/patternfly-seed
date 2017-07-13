(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('TableCtrl', Controller);

    Controller.$inject = ['$rootScope', 'TableSrvc'];

    function Controller($rootScope, TableSrvc) {
        var $ctrl = this;

        $ctrl.name = 'Table';
        $rootScope.$emit('success', 'Successfully changed state to ' + $ctrl.name);

        $ctrl.items = TableSrvc.getItems();

        $ctrl.dtOptions = {
            paginationType: 'full',
            displayLength: 20,
            dom: 'irtp'
        };

        $ctrl.columns = [
            {header: 'Name', itemField: 'name'},
            {header: 'Address', itemField: 'address'},
            {header: 'City', itemField: 'city'},
            {header: 'State', itemField: 'state'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'name',
            itemsAvailable: true,
            showCheckboxes: false
        };

    }
})();
