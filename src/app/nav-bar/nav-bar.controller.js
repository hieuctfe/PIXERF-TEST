// home.controller.js
(() => {

    angular
        .module('app')
        .controller('NavBarController', NavBarController);

    function NavBarController() {
        const vm = this;
        vm.$onInit = onInit;

        activate();

        ////////////

        function activate() {
        }
        
        function onInit() {
        }
    }

})();