(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('TableSrvc', Service);

    Service.$inject = ['$http'];

    function Service($http) {

        var factory = {};

        factory.getItems = function() {
            return $http.get('app/components/table/data.json');
        };

        return factory;
    }
})();

