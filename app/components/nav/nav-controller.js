(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('NavCtrl', Controller);

    Controller.$inject = ['$scope', 'Notifications'];

    function Controller($scope, Notifications) {

        $scope.navItems = [
            {
                title: "Home",
                iconClass: "fa fa-home",
                uiSref: "home"
            },
            {
                title: "Link1",
                iconClass: "fa fa-file",
                uiSref: "link1"
            },
            {
                title: "Link2",
                iconClass: "fa fa-file-o",
                uiSref: "link2"
            }
        ];

        // Notifications
        $scope.clear = function () {
            $scope.notifyCount = 0;
            $scope.menuItems = [];
        };

        $scope.getClass = function (type) {
            switch (type) {
                case 'success':
                    return 'pficon-ok';
                case 'warning':
                    return 'pficon-warning-triangle-o';
                case 'danger':
                    return 'pficon-error-circle-o';
                default:
                    return 'pficon-info';
            }
        };

        $scope.clear();

        $scope.$on('success', function (event, data) {
            notify('success', data);
        });

        $scope.$on('error', function (event, data) {
            notify('danger', data);
        });

        $scope.$on('info', function (event, data) {
            notify('info', data);
        });

        $scope.$on('warning', function (event, data) {
            notify('warning', data);
        });

        function notify(type, msg) {
            $scope.notifyCount++;
            $scope.menuItems.push({
                type: type,
                msg: msg
            });
            Notifications.message(type, '', msg);
        }

        $scope.notifications = Notifications.data;
    }
})();