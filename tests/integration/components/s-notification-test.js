import {
  module,
  test
} from 'qunit';
import {
  setupRenderingTest
} from 'ember-qunit';
import {
  click,
  render,
  settled
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | s-notification', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (assert) {
    this.notificationService = this.owner.lookup('service:notification');
    this.set('notificationService.messages', Ember.A());
  });

  test('it renders', async function (assert) {
    await render(hbs `{{s-notification}}`);
    assert.equal(this.element.getElementsByClassName('notifications-area').length, 1);
  });

  test('check render for single notification', async function (assert) {
    this.get('notificationService').warning({
      message: 'The command belongs to a differentAccount',
      icon: 'qi-tick',
      isPersistent: true,
      isCloseable: true
    });
    await render(hbs `{{s-notification}}`);

    assert.equal(this.element.getElementsByClassName('notifications-area').length, 1);
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 0);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 0);
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 1);
  });

  test('check render for mulitple notification', async function (assert) {
    this.get('notificationService').warning({
      message: 'The command belongs to a differentAccount',
      icon: 'qi-tick',
      isPersistent: true,
      isCloseable: true
    });
    this.get('notificationService').danger({
      message: 'The command belongs to a differentAccount',
      isPersistent: true,
      isCloseable: true
    });
    await render(hbs `{{s-notification}}`);
    //should render 1 notification with show more
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 1);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 1);
    assert.equal(this.element.querySelector('.show-more-footer').textContent.trim(), 'See 1 more');
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 1);


    //clicking on show more show open up all the notifications with show less
    await click('.show-more-footer');
    assert.equal(this.element.querySelector('.primary-notification').offsetParent, null);
    assert.equal(this.element.querySelectorAll('.secondary-notifications .q-notifications').length, 2);
    assert.equal(this.element.querySelector('.show-less-footer').textContent.trim(), 'See Less');


    await click('.show-less-footer');
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 1);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 1);
    assert.equal(this.element.querySelector('.show-more-footer').textContent.trim(), 'See 1 more');
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 1);
  });

  test('check clear all - in collapsed mode', async function (assert) {
    //let clock = sinon.useFakeTimers();
    this.get('notificationService').warning({
      message: 'The command belongs to a differentAccount',
      icon: 'qi-tick',
      isPersistent: true,
      isCloseable: true
    });
    this.get('notificationService').danger({
      message: 'The command belongs to a differentAccount',
      isPersistent: true,
      isCloseable: true
    });
    await render(hbs `{{s-notification}}`);
    //should render 1 notification with show more
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 1);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 1);
    assert.equal(this.element.querySelector('.show-more-footer').textContent.trim(), 'See 1 more');
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 1);

    await click('.clear-all-header');
    await settled();
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 0);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 0);
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 0);
  });

  test('check clear all - in expanded mode', async function (assert) {
    this.get('notificationService').success({
      message: 'The command belongs to a differentAccount',
      icon: 'qi-tick',
      isPersistent: true,
      isCloseable: true
    });
    this.get('notificationService').error({
      message: 'The command belongs to a differentAccount',
      isPersistent: true,
      isCloseable: true
    });
    this.get('notificationService').progress({
      message: 'Uploading the file'
    });
    await render(hbs `{{s-notification}}`);
    //should render 1 notification with show more
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 1);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 1);
    assert.equal(this.element.querySelector('.show-more-footer').textContent.trim(), 'See 2 more');
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 1);


    await click('.show-more-footer');
    assert.equal(this.element.querySelector('.primary-notification').offsetParent, null);
    assert.equal(this.element.querySelectorAll('.secondary-notifications .q-notifications').length, 3);
    assert.equal(this.element.querySelector('.show-less-footer').textContent.trim(), 'See Less');


    await click('.clear-all-header');
    await settled();
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 0);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 0);
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 0);
  });

  test('check remove notification', async function (assert) {
    this.get('notificationService').failure({
      message: 'The command belongs to a differentAccount',
      isPersistent: true,
      isCloseable: true
    });

    await render(hbs `{{s-notification}}`);
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 0);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 0);
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 1);

    await click('.close-notification');
    await settled();
    assert.equal(this.element.getElementsByClassName('clear-all-header').length, 0);
    assert.equal(this.element.getElementsByClassName('show-more-footer').length, 0);
    assert.equal(this.element.getElementsByClassName('q-notifications').length, 0);
  });
});
