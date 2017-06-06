(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('NavCtrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {

        $scope.navItems = [
            {
                title: "Home",
                iconClass: "fa fa-home",
                uiSref: "home"
            },
            {
                title: "Link1",
                iconClass : "fa fa-file",
                uiSref: "link1"
            },
            {
                title: "Link2",
                iconClass : "fa fa-file-o",
                uiSref: "link2"
            }
        ];
    }
})();