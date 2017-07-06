(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('NavCtrl', Controller);

    Controller.$inject = ['$scope', 'Notifications', '$rootScope'];

    function Controller($scope, Notifications, $rootScope) {

        $scope.navItems = [
            {
                title: "Card View",
                iconClass: "fa fa-file",
                uiSref: "card"
            },
            {
                title: "Table View",
                iconClass: "fa fa-table",
                uiSref: "table"
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

        $rootScope.$on('success', function (event, data) {
            notify('success', data);
        });

        $rootScope.$on('error', function (event, data) {
            notify('danger', data);
        });

        $rootScope.$on('info', function (event, data) {
            notify('info', data);
        });

        $rootScope.$on('warning', function (event, data) {
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