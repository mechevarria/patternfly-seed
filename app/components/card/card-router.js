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
                controller: 'CardCtrl',
                templateUrl: 'app/components/card/card.html',
                ncyBreadcrumb: {
                    label: 'Card View',
                    parent: 'home'
                }
            });

    }
})();
