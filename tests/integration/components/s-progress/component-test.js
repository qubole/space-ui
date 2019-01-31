import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-progress', function(hooks) {
    setupRenderingTest(hooks);

    test('renders', async function(assert) {
        await render(hbs`{{s-progress cssClasses="custom-progress"}}`);
        assert.equal(this.element.getElementsByClassName('qu-progress custom-progress').length, 1);
    });

    test('check progress bar width', async function(assert){
        this.set('progress', 64);
        await render(hbs`{{s-progress progress=progress}}`);
        assert.equal(this.element.getElementsByClassName('progress').length, 1);
        assert.equal(this.element.querySelector('.progress-bar').getAttribute('aria-valuenow'), '64');
        assert.equal(this.element.querySelector('.progress-bar').getAttribute('style'), 'width: 64%;');
        assert.equal(this.element.querySelector('.progress-text').textContent.trim(), '64%');

        this.set('progress', 0);
        assert.equal(this.element.getElementsByClassName('progress').length, 1);
        assert.equal(this.element.querySelector('.progress-bar').getAttribute('aria-valuenow'), '0');
        assert.equal(this.element.querySelector('.progress-bar').getAttribute('style'), 'width: 0%;');
        assert.equal(this.element.querySelector('.progress-text').textContent.trim(), '0%');
    });
});
