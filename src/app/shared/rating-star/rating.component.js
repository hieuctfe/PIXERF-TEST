// item.component.js
(() => {
    angular
        .module('app')
        .component('rating', {
            controller: 'RatingController',
            controllerAs: 'vm',
            templateUrl: 'app/shared/rating-star/rating.html',
            bindings: {
                star: '=',
            }
        });
})();