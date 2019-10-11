# PIXERF PTE LTD TEST

## Quick guild

1. clone or download
2. `npm install gulp -g`
3. `npm install`
4. `npm start`

## Dependencies

* Latest version of [AngularJS](https://angularjs.org);
* [Gulp and Gulp-sass](https://gulpjs.com) for building;
* Folders-by-Feature structure;
* Component-based design;
* [AngularUI Router](http://angular-ui.github.io/ui-router/) for client-side routing;
* Data calls through services;
* ECMAScript 6 (arrow functions, strings interpolation);
* [Browsersync](https://browsersync.io/) for auto reload;

## Structure

```
|-- PIXERF TEST
    |-- .gitignore
    |-- README.md
    |-- gulpfile.js
    |-- package-lock.json
    |-- package.json
    |-- scripts.json
    |-- styles.json
    |-- templates.json
    |-- object-model.json                       // if api not working, please fake like this model
    |-- .vscode
    |   |-- extensions.json
    |   |-- settings.json
    |-- assets
    |   |-- favicon.ico
    |   |-- image
        |   |-- photo-1.jpg
        |   |-- .
        |   |-- .
        |   |-- .
        |   |-- photo-30.jpg
    |-- src
        |-- app.debug.js                        // uncomment when dev for easy
        |-- app.module.js
        |-- app.routes.js
        |-- app.settings.js                     // config api domain here
        |-- index.html
        |-- style.scss
        |-- app
            |-- albums
            |   |-- _albums.scss
            |   |-- albums.component.js
            |   |-- albums.controller.js
            |   |-- albums.html
            |   |-- albums.service.js
            |-- nav-bar
            |   |-- index.scss
            |   |-- nav-bar.component.js
            |   |-- nav-bar.controller.js
            |   |-- nav-bar.html
            |-- submission
            |   |-- posts.service.js            // call fake API here
            |   |-- submission.component.js
            |   |-- submission.controller.js
            |   |-- submission.html
            |-- winner
                |-- winner.component.js
                |-- winner.controller.js
                |-- winner.html
            |-- shared
            |   |-- api.service.js
            |   |-- helper.js
            |   |-- item
            |   |   |-- item.component.js
            |   |   |-- item.controller.js
            |   |   |-- item.html
            |   |   |-- item.scss
            |   |-- rating-star
            |       |-- rating.component.js
            |       |-- rating.controller.js
            |       |-- rating.html
            |       |-- rating.scss
```


