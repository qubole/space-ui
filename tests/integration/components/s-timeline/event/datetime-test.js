import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | s-timeline/event/datetime', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('data', EmberObject.extend({
      datetime: 1551161632
    }).create());
    this.set('cssClasses', '');
    this.set('axisCssClasses', '');

    await render(hbs`
      {{#s-timeline/event/datetime data=data cssClasses=cssClasses axisCssClasses=axisCssClasses as |datetime|}}
        {{datetime}}
      {{/s-timeline/event/datetime}}
    `);

    assert.equal(this.element.textContent.trim(), '1551161632');
  });

  test('it renders with cssClasses and axisCssClasses', async function(assert) {
    this.set('data', EmberObject.extend({
      datetime: 1551161632
    }).create());
    this.set('cssClasses', 'example-css-classes');
    this.set('axisCssClasses', 'example-axis-css-classes');

    await render(hbs`
      {{#s-timeline/event/datetime data=data cssClasses=cssClasses axisCssClasses=axisCssClasses as |datetime|}}
        {{datetime}}
      {{/s-timeline/event/datetime}}
    `);

    assert.equal(this.element.textContent.trim(), '1551161632');
    assert.equal(this.element.querySelector('div:first-child > div').getAttribute('class'), 'example-css-classes');
    assert.equal(this.element.querySelector('div:first-child > div > .axis').getAttribute('class'), 'axis example-axis-css-classes');
  });
});
