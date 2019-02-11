import {
    module,
    test,
    skip
} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-textarea', function(hooks) {
    setupRenderingTest(hooks);

    skip('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`{{s-textarea}}`);

        assert.equal(this.element.textContent.trim(), '');

        // Template block usage:
        await render(hbs`
      {{#s-textarea}}
        template block text
      {{/s-textarea}}
    `);

        assert.equal(this.element.textContent.trim(), 'template block text');
    });
});
