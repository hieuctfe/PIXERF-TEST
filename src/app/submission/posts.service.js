// posts.service.js
(() => {

    angular
        .module('app')
        .factory('postsService', PostsService);

    function PostsService(apiService) {

        return {
            getPosts: getPosts,
            mapRating: mapRating,
            updateRating: updateRating,
            unVote: unVote,
        };

        function getRating() {
            let stars = localStorage.getItem("star-state")
            return  stars ? JSON.parse(stars) : [];
        }

        function unVote(post) {
            let stars = getRating()
            if (!stars) {
                return;
            } else {
                stars = stars.filter(el => {
                    if (el.id == post.id) {
                        return false;
                    }
                    return true;
                })
                localStorage.setItem("star-state", JSON.stringify(stars));
            };
            return;
        }

        function updateRating(post) {
            delete post['$$hashKey']
            post.date = new Date()
            let stars = getRating()
            if (!stars) {
                stars = [post]
            } else {
                let flag = false;
                stars = stars.map(el => {
                    if (el.id == post.id) {
                        el.star = post.star;
                        flag = true;
                    }
                    return el;
                })
                if (!flag) {
                    stars.push(post)
                }
            };
            localStorage.setItem("star-state", JSON.stringify(stars));
        }

        ////////////
        function getPosts() {
            return apiService.get('/api/json/get/bUIGtCXvSa?indent=2', true);
        }

        function mapRating(data) {
            let ratings = getRating();
            if (ratings) {
                data = data.map((item) => {
                    ratings.forEach(rating => {
                        if (item.id == rating.id) {
                            item = {...item,...rating};
                        }
                    })
                    return item;
                })
            }
            return data
        }
    }
})();