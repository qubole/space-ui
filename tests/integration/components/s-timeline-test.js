import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { A } from '@ember/array';
import Component from '@ember/component';

module('Integration | Component | s-timeline', function(hooks) {
  setupRenderingTest(hooks);

  test('it should render s-timeline for simple text events', async function(assert) {

    this.set('simple', {
      events: A([Ember.Object.create({
        status: 'complete',
        datetime: 1551161632,
        title: 'Title 1',
        content: 'Message 1',
        open: false
      }), Ember.Object.create({
        status: 'active',
        datetime: 1551161632,
        title: 'Title 2',
        content: 'Message 2',
        open: false
      }), Ember.Object.create({
        status: 'inactive',
        datetime: 1551161632,
        title: 'Title 3',
        content: 'Message 3',
        open: true
      })]),
      ascending: true,
      custom: false,
      customStates: {}
    });

    // Template block usage:
    await render(hbs`
      {{#s-timeline
        events=simple.events
        ascending=simple.ascending
        custom=simple.custom
        customStates=simple.customStates as |event|}}
          {{#event.datetime as |datetime|}}
            {{datetime}}
          {{/event.datetime}}
          {{#event.content as |content|}}
            {{#content.title as |title|}}
              {{title}}
            {{/content.title}}
            {{#content.body as |body|}}
              {{body}}
            {{/content.body}}
          {{/event.content}}
      {{/s-timeline}}
    `);

    assert.equal(this.element.querySelectorAll('.s-timeline-event').length, 3);
    assert.equal(this.element.querySelector('.s-timeline-event:nth-child(1) .s-timeline-event-content-title').textContent.trim(), 'Title 1');
    assert.equal(this.element.querySelector('.s-timeline-event:nth-child(1) .s-timeline-event-content-body').textContent.trim(), 'Message 1');
    assert.equal(this.element.querySelector('.s-timeline-event:nth-child(2) .s-timeline-event-content-title').textContent.trim(), 'Title 2');
    assert.equal(this.element.querySelector('.s-timeline-event:nth-child(2) .s-timeline-event-content-body').textContent.trim(), 'Message 2');
    assert.equal(this.element.querySelector('.s-timeline-event:nth-child(3) .s-timeline-event-content-title').textContent.trim(), 'Title 3');
    assert.equal(this.element.querySelector('.s-timeline-event:nth-child(3) .s-timeline-event-content-body').textContent.trim(), 'Message 3');
  });
});
