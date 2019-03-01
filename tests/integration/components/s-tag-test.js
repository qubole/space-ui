import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-tag', function(hooks) {
    setupRenderingTest(hooks);

    skip('it renders', async function(assert) {
        await render(hbs`{{s-tag}}`);
        assert.equal(this.element.textContent.trim(), '');
        this.set('externalAction', function () {
        // this.set('text', 'clicked');
        // assert.equal(this.element.textContent.trim(), 'Test Button clicked');
        });
        // Template block usage:
        await render(hbs`
      {{s-tag key=1 onClose=(action externalAction)}}
    `);
        assert.equal(this.element.textContent.trim(), 'template block text');
    });

});
