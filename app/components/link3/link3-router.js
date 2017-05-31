(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'link3',
                url:'/link3',
                controller: 'Link3Ctrl',
                templateUrl: 'app/components/link3/link3.html'
            });

    }
})();
