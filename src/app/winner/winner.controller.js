// posts.controller.js
(() => {

    angular
        .module('app')
        .controller('WinnersController', WinnersController);
        WinnersController.$inject = ['$scope','postsService','helper'];
    function WinnersController($scope, postsService, helper) {
        const vm = this;
        vm.$onInit = onInit;
        vm.posts = null;
        const numberOfTop = 6

        activate();

        ////////////

        function activate() {
        }

        $scope.$on('resetVote', function(ev){
            vm.posts = getTop(postsService.mapRating(vm.cache_posts));
        })

        $scope.$on('rating', function(star){
            vm.posts = getTop(postsService.mapRating(vm.cache_posts));
        })

        function getTop(datas) {
            if(datas.length) {
                const rateds = datas.filter(el => el.star).sort(helper.compareStar);
                if (rateds.length <= numberOfTop) return rateds;
                let sameRatings = datas.filter(el => el.star == rateds[numberOfTop - 1].star)
                if (sameRatings.length > 1) {
                    sameRatings.sort(helper.compareDate);
                    let temp = 0;
                    const minSameIndex = rateds.findIndex(el => el.star == rateds[numberOfTop - 1].star)
                    for (let i = minSameIndex; i < numberOfTop; i++) {
                        rateds[i] = sameRatings[temp];
                        temp++;
                    }
                }
                return rateds.slice(0,6);
            } 
        }

        function onInit() {
            postsService.getPosts()
            .then(posts => {
                vm.cache_posts = posts;
                vm.posts = getTop(postsService.mapRating(posts));
            });
        }
    }

})();