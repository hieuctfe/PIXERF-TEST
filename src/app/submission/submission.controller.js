// home.controller.js
(() => {

    angular
        .module('app')
        .controller('SubmisstionController', SubmisstionController);
    SubmisstionController.$inject = ['$scope','postsService','helper'];
    function SubmisstionController($scope, postsService, helper) {
        const vm = this;
        vm.$onInit = onInit;
        vm.posts = null;

        activate();

        ////////////

        function activate() {
        }

        $scope.$on('resetVote', function(){
            vm.posts = postsService.mapRating(vm.posts);
        })
        
        function onInit() {
            postsService.getPosts()
            .then(posts => {
                vm.posts = postsService.mapRating(posts.sort(helper.compareName));
            });
        }
    }

})();