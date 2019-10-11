// posts.service.js
(() => {

    angular
        .module('app')
        .factory('helper', HelperService);

    function HelperService() {

        return {
            compareStar: compareStar,
            compareName: compareName,
            compareDate: compareDate,
        };
               
        function compareStar(a = 0,b = 0) {
            if(a.star < b.star) { return 1; }
            if(a.star > b.star) { return -1; }
            return 0;
        }

        function compareName(a,b) {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        }

        function compareDate(a,b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return a > b ? 1 : a < b ? -1 : 0;
        }

    }
})();