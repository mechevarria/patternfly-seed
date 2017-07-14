(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('CardCtrl', Controller);

    Controller.$inject = ['NotifySrvc'];

    function Controller(NotifySrvc) {
        var $ctrl = this;

        $ctrl.name = 'Card';
        NotifySrvc.success('Successfully changed state to ' + $ctrl.name);
    }
})();
