import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | s-timeline/event', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('ascending', true);
    this.set('index', 0);
    this.set('data', EmberObject.extend({}).create());
    this.set('toggleEvent', function() {});

    await render(hbs`
      {{#s-timeline/event ascending=ascending index=index data=data toggleEvent=(action toggleEvent) as |event|}}
        {{event}}
      {{/s-timeline/event}}
    `);

    assert.equal(this.element.querySelectorAll('.s-timeline-event').length, 1);
  });
});
