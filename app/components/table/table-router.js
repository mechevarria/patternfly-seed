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
                component: 'appTable',
                ncyBreadcrumb: {
                    label: 'Table View',
                    parent: 'home'
                }
            });

    }
})();
