// home.component.js
(() => {

    angular
        .module('app')
        .component('submissions', {
            controller: 'SubmisstionController',
            controllerAs: 'vm',
            templateUrl: 'app/submission/submission.html'
        });

})();