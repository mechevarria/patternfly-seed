(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'link2',
                url:'/link2',
                controller: 'Link2Ctrl',
                templateUrl: 'app/components/link2/link2.html'
            });

    }
})();
