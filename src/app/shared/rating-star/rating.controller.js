// item.controller.js
(() => {

    angular
        .module('app')
        .controller('RatingController', RatingController);
        RatingController.$inject = ['$scope','postsService'];
    function RatingController($scope) {
        const vm = this;
        vm.$onInit = onInit;
        vm.numberOfStar = 5
        $scope.star = {};
        activate();


        vm.getNumber = function() {
            return new Array(vm.numberOfStar);   
        }

        $scope.watchChange = function() {
            $scope.$emit("rating", $scope.star.value); 
        }
        
        $scope.$on('setStar', function(event, star) {
            $scope.star.value = star
        });

        function activate() {
        }

        function onInit() {
            $scope.star.value = (vm.star && typeof vm.star == 'number') ? vm.star : 0;
            vm.random = Math.floor(Math.random() * 999999)
        }
    }

})();