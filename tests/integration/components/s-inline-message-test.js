import {
    module,
    test,
    skip
} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-inline-message', function(hooks) {
    setupRenderingTest(hooks);

    skip('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });


        // Template block usage:

        await render(hbs`{{s-inline-message}}`);

        assert.equal(this.element.textContent.trim(), '');

        // Template block usage:
        await render(hbs`
      {{#s-inline-message}}
        template block text
      {{/s-inline-message}}
    `);

        assert.equal(this.element.textContent.trim(), 'template block text');
    });
});
