(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'link1',
                url:'/link1',
                controller: 'Link1Ctrl',
                templateUrl: 'app/components/link1/link1.html'
            });

    }
})();
