(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('TableCtrl', Controller);

    Controller.$inject = ['NotifySrvc', 'TableSrvc'];

    function Controller(NotifySrvc, TableSrvc) {
        var $ctrl = this;

        $ctrl.name = 'Table';
        NotifySrvc.success('Successfully changed state to ' + $ctrl.name);

        $ctrl.items = [];

        TableSrvc.getItems()
            .then(function (resp) {
                $ctrl.items = resp.data;
            })
            .catch(function (err) {
                NotifySrvc.error(err.status + ', ' + err.statusText);
            });

        $ctrl.pageConfig = {
            pageNumber: 1,
            pageSize: 10,
            pageSizeIncrements: [5, 10, 20]
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
