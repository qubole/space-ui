import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-input', function(hooks) {
    setupRenderingTest(hooks);

    skip('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`{{s-input}}`);

        assert.equal(this.element.textContent.trim(), '');

        // Template block usage:
        await render(hbs`
      {{s-input type=text value='template block text'}}
    `);

        assert.equal(this.element.textContent.trim(), 'template block text');
    });
});
