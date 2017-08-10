(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('TableSrvc', Service);

    Service.$inject = ['$http', '$base64'];

    function Service($http, $base64) {

        var user = 'username';
        var pass = 'password';

        var customHeaders = {
            Authorization: 'Basic ' + $base64.encode(user + ':' + pass)
        };

        var factory = {};

        factory.getItems = function() {
            return $http.get('app/components/table/data.json', {
                headers: customHeaders
            });
        };

        return factory;
    }
})();

