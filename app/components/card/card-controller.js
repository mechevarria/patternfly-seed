(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('CardCtrl', Controller);

    Controller.$inject = ['$rootScope'];

    function Controller($rootScope) {
        var $ctrl = this;

        $ctrl.name = 'Card';
        $rootScope.$emit('success', 'Successfully changed state to ' + $ctrl.name);
    }
})();
