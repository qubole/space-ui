'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const nodeSass = require('node-sass');

module.exports = function (defaults) {
    let app = new EmberAddon(defaults, {
        babel: {
            plugins: ['transform-object-rest-spread']
        },
        sassOptions: {
            implementation: nodeSass
        },
        // snippetSearchPaths: ['app', 'tests/dummy/app']
        sassLint: {
            configPath: '.sass-lint.yml',
            shouldThrowExceptions: true,
            shouldLog: true
        }
    // svgJar: {
    //     sourceDirs: [
    //         'public/assets/images/'
    //     ]
    // }
    });


    app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
    app.import('node_modules/bootstrap/dist/css/bootstrap.css');
    // app.import('bower_components/lodash/lodash.js');

    /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

    return app.toTree();
};
