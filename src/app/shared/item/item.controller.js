// item.controller.js
(() => {

    angular
        .module('app')
        .controller('ItemController', ItemController);
        ItemController.$inject = ['$scope','postsService'];
    function ItemController($scope, postsService) {
        const vm = this;
        vm.$onInit = onInit;
        vm.reset = true;

        $scope.$on('rating', function(ev, star){
            vm.item.star = star;
            postsService.updateRating(vm.item)
        })
        vm.unVote = function() {
            postsService.unVote(vm.item)
            vm.item.star = 0
            $scope.$emit("resetVote"); 
            
            $scope.$broadcast('setStar', 0)
        }
        activate();

        ////////////

        function activate() {
        }

        function onInit() {
        }
    }

})();