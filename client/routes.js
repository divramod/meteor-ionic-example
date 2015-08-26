angular.module("app.example").config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise("/tabs");

        $stateProvider
            .state('tabs', {
                url: '/tabs',
                templateUrl: 'index.ng.html',
                controller: 'TodoCtrl'
            });
    }
]);
