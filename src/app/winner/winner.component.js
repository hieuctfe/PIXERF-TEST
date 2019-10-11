// posts.component.js
(() => {

    angular
        .module('app')
        .component('winners', {
            controller: 'WinnersController',
            controllerAs: 'vm',
            templateUrl: 'app/winner/winner.html'
        });

})();