import {
  module,
  test
} from 'qunit';
import {
  setupTest
} from 'ember-qunit';
import {
  settled
} from '@ember/test-helpers';

module('service:notification`', 'Unit | Service | notification`', function (hooks) {
  setupTest(hooks);
  // Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:notification`');
    assert.ok(service);
  });

  test('check non persistant info notification', async function (assert) {
    let service = this.owner.lookup('service:notification`');
    service.info({
      message: 'Query cant be empty',
      isPersistant: false,
      isCloseable: false
    });
    assert.equal(service.get('messages.length'), 1);
    await settled();
    assert.equal(service.get('messages.length'), 0);
  });

  test('check progress options', function (assert) {
    let service = this.owner.lookup('service:notification`');
    let progressNotif = service.progress({
      message: 'Downloading..',
      icon: 'qi-tick',
      isCloseable: false,
      isPersistant: true,
      actions: Ember.Object.create({
        title: 'View',
        action: () => {
          sinon.spy();
        }
      })
    });
    assert.equal(progressNotif.get('typeClass'), 'info');
    assert.equal(progressNotif.get('icon'), false);
    assert.equal(progressNotif.get('isCloseable'), false);
    assert.equal(progressNotif.get('isPersistant'), true);
  });

  test('check remove notification for null', function (assert) {
    let service = this.owner.lookup('service:notification`');
    let res = service.removeNotification(null);
    assert.equal(res, undefined);
  });
});
