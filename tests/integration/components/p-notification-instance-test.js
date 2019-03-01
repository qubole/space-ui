import {
  module,
  test
} from 'qunit';
import {
  setupRenderingTest
} from 'ember-qunit';
import {
  render,
  click
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | p-notification-instance', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs `{{p-notification-instance direction='down'}}`);
    assert.equal(this.element.getElementsByClassName('q-notifications slide-up').length, 1);
  });

  test('check shownotif class', async function (assert) {
    await render(hbs `{{p-notification-instance direction='left'}}`);
    assert.equal(this.element.getElementsByClassName('q-notifications slide-in').length, 1);
  });

  test('check notification with action', async function (assert) {
    this.set('textChanged', 'not clicked');
    this.set('externalAction',  () => {
      this.set('textChanged', 'clicked');
      assert.equal(this.element.querySelector('#textArea').textContent.trim(), "clicked");
    });
    let notification = Ember.Object.create({
      typeClass: 'warning',
      message: 'Query statement cant be empty',
      icon: false,
      isCloseable: true,
      isPersistent: true,
      actions: Ember.Object.create({
        title: 'view',
        callback: this.get('externalAction')
      })
    });
    this.set('notification', notification);
    await render(hbs `{{p-notification-instance notification=notification \
          secondaryAction=notification.actions.callback}}<div id="textArea">{{textChanged}}</div>`);
    assert.equal(this.element.getElementsByClassName('close-notification').length, 1);
    assert.equal(this.element.getElementsByClassName('notification-icon').length, 0);
    assert.equal(this.element.querySelector('.notification-action').textContent.trim(), 'view');
    assert.equal(this.element.getElementsByClassName('notification-message col-9').length, 1);
    assert.equal(this.element.getElementsByClassName('query-progress').length, 0);
    assert.equal(this.element.querySelector('#textArea').textContent.trim(), "not clicked");

    await click('.notification-action');
  });

  test('check progress notification with action and icon', async function (assert) {
    this.set('textChanged', 'not clicked');
    this.set('externalAction', () => {
      this.set('textChanged', 'clicked');
      assert.equal(this.element.querySelector('#textArea').textContent.trim(), "clicked");
    });
    let notification = Ember.Object.create({
      typeClass: 'progress',
      message: 'Query statement cant be empty',
      icon: true,
      isCloseable: true,
      isPersistent: true,
      progress: Ember.Object.create({
        percentage: 0
      }),
      actions: Ember.Object.create({
        title: 'view',
        callback: this.get('externalAction')
      })
    });
    this.set('notification', notification);
    await render(hbs `{{p-notification-instance \
          notification=notification \
          secondaryAction=notification.actions.callback\
        }}<div id="textArea">{{textChanged}}</div>`);
    assert.equal(this.element.getElementsByClassName('close-notification').length, 1);
    assert.equal(this.element.getElementsByClassName('notification-icon').length, 1);
    assert.equal(this.element.querySelector('.notification-action').textContent.trim(), 'view');
    assert.equal(this.element.getElementsByClassName('notification-message col-8').length, 1);
    assert.equal(this.element.getElementsByClassName('query-progress').length, 1);
    assert.equal(this.element.querySelector('#textArea').textContent.trim(), "not clicked");
    await click('.notification-action');
  });
});
