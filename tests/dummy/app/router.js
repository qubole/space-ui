// import EmberRouter from '@ember/routing/router';
import AddonDocsRouter, {
    docsRoute
} from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    docsRoute(this, function () {
        this.route('intro');
        this.route('usage');
        this.route('quickstart');

        //components
        this.route('button');
        this.route('input');
        this.route('tag');

    /* Your docs routes go here */
    });
    this.route('not-found', {
        path: '/*path'
    });
});

export default Router;
