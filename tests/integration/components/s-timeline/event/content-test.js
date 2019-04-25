import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | s-timeline/event/content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('index', 0);
    this.set('data', EmberObject.extend({

    }).create());
    this.set('cssClasses', '');
    this.set('toggleEvent', function() {});

    await render(hbs`
      {{s-timeline/event/content index=index data=data cssClasses=cssClasses toggleEvent=(action toggleEvent)}}
    `);

    assert.equal(this.element.querySelector('div:first-child > div').getAttribute('class'), '');
  });

  test('it renders with cssClasses', async function(assert) {
    this.set('index', 0);
    this.set('data', EmberObject.extend({

    }).create());
    this.set('cssClasses', 'simple-classes');
    this.set('toggleEvent', function() {});

    await render(hbs`
      {{s-timeline/event/content index=index data=data cssClasses=cssClasses toggleEvent=(action toggleEvent)}}
    `);

    assert.equal(this.element.querySelector('div:first-child > div').getAttribute('class'), 'simple-classes');
  });
});
