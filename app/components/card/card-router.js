(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'card',
                url:'/card',
                component: 'appCard',
                ncyBreadcrumb: {
                    label: 'Card View',
                    parent: 'home'
                }
            });

    }
})();
