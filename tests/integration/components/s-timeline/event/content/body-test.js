import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | s-timeline/event/content/body', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('data', EmberObject.extend({
      content: 'Example Body',
      open: false
    }).create());

    await render(hbs`
      {{#s-timeline/event/content/body data=data open=data.open as |body|}}
        {{body}}
      {{/s-timeline/event/content/body}}
    `);

    assert.equal(this.element.textContent.trim(), 'Example Body');
  });
});
