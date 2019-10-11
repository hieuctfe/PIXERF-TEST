// app.routes.js
(() => {

    angular.module('app')

        .config(($stateProvider, $urlRouterProvider) => {
            const states = [{
                name: 'submissions',
                url: '',
                template: '<submissions></submissions>',
                data: {
                    pageTitle: 'SUBMISSONS'
                }
            }, {
                name: 'winners',
                url: '/winners',
                template: '<winners></winners>',
                data: {
                    pageTitle: 'WINNERS'
                }
            }];
            states.forEach(state => {
                $stateProvider.state(state);
            });
            $urlRouterProvider.when('/', ['$state', '$match', ($state, $match) => {
                $state.go('submissions');
            }]);
        })

        .run(
            ['$rootScope', '$state', '$stateParams',
                ($rootScope, $state, $stateParams) => {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                }
            ]
        );

})();