// albums.controller.js
(() => {

    angular
        .module('app')
        .controller('AlbumsController', AlbumsController);

    function AlbumsController(albumsService) {
        const vm = this;
        vm.$onInit = onInit;
        vm.header = 'Albums';

        activate();

        ////////////

        function activate() {
        }

        function onInit() {
          
        }

    }

})();