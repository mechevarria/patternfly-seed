(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider','$urlRouterProvider'];

    function Router($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state({
                name: 'home',
                url:'/home',
                controller: 'HomeCtrl',
                templateUrl: 'app/components/home/home.html'
            });

    }
})();
