(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'table',
                url:'/table',
                controller: 'TableCtrl',
                templateUrl: 'app/components/table/table.html',
                ncyBreadcrumb: {
                    label: 'Table View',
                    parent: 'home'
                }
            });

    }
})();
