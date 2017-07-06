(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('TableSrvc', Service);

    function Service() {

        var factory = {};

        factory.getItems = function () {
            var items = [
                {
                    name: 'Fred Flintstone',
                    address: '20 Dinosaur Way',
                    city: 'Bedrock',
                    state: 'Washington'
                },
                {
                    name: 'John Smith',
                    address: '415 East Main Street',
                    city: 'Norfolk',
                    state: 'Virginia',
                },
                {
                    name: 'Frank Livingston',
                    address: '234 Elm Street',
                    city: 'Pittsburgh',
                    state: 'Pennsylvania'
                },
                {
                    name: 'Linda McGovern',
                    address: '22 Oak Street',
                    city: 'Denver',
                    state: 'Colorado'
                },
                {
                    name: 'Jim Brown',
                    address: '72 Bourbon Way',
                    city: 'Nashville',
                    state: 'Tennessee'
                },
                {
                    name: 'Holly Nichols',
                    address: '21 Jump Street',
                    city: 'Hollywood',
                    state: 'California'
                },
                {
                    name: 'Marie Edwards',
                    address: '17 Cross Street',
                    city: 'Boston',
                    state: 'Massachusetts'
                },
                {
                    name: 'Pat Thomas',
                    address: '50 Second Street',
                    city: 'New York',
                    state: 'New York'
                }
            ];

            return items;
        };

        return factory;
    }
})();

