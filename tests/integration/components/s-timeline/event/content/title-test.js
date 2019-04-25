import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | s-timeline/event/content/title', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('data', EmberObject.extend({
      title: 'Example Title',
      open: false
    }).create());
    this.set('index', 0);
    this.set('toggleEvent', function() {});

    await render(hbs`
      {{#s-timeline/event/content/title data=data index=index toggleEvent=(action toggleEvent) as |title|}}
        {{title}}
      {{/s-timeline/event/content/title}}
    `);

    assert.equal(this.element.textContent.trim(), 'Example Title');
  });
});
