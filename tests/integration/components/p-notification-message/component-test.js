import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | p-notification-message', function(hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
        await render(hbs`{{p-notification-message direction='down'}}`);
        assert.equal(this.element.getElementsByClassName('q-notifications slide-up').length, 1);
    });

    test('check shownotif class', async function(assert) {
        await render(hbs`{{p-notification-message direction='left'}}`);
        assert.equal(this.element.getElementsByClassName('q-notifications slide-in').length, 1);
    });

    test('check notification with action', async function(assert){
        let callbackSpy = sinon.spy();
        let notification = Ember.Object.create({
            typeClass: 'warning',
            message: 'Query statement cant be empty',
            icon: false,
            isCloseable: true,
            isPersistant: true,
            actions: Ember.Object.create({
                title: 'view',
                callback: () => {
                    callbackSpy();
                }
            })
        });
        this.set('notification', notification);
        await render(hbs`{{p-notification-message notification=notification}}`);
        assert.equal(this.element.getElementsByClassName('close-notification').length, 1);
        assert.equal(this.element.getElementsByClassName('notification-icon').length, 0);
        assert.equal(this.element.querySelector('.notification-action').textContent.trim(), 'view');
        assert.equal(this.element.getElementsByClassName('notification-message col-sm-9').length, 1);
        assert.equal(this.element.getElementsByClassName('query-progress').length, 0);

        await click('.notification-action');
        assert.equal(callbackSpy.called, true);
    });

    test('check progress notification with action and icon', async function(assert){
        let callbackSpy = sinon.spy();
        let notification = Ember.Object.create({
            typeClass: 'progress',
            message: 'Query statement cant be empty',
            icon: true,
            isCloseable: true,
            isPersistant: true,
            progress: Ember.Object.create({
                percentage: 0
            }),
            actions: Ember.Object.create({
                title: 'view',
                callback: () => {
                    callbackSpy();
                }
            })
        });
        this.set('notification', notification);
        await render(hbs`{{p-notification-message notification=notification}}`);
        assert.equal(this.element.getElementsByClassName('close-notification').length, 1);
        assert.equal(this.element.getElementsByClassName('notification-icon').length, 1);
        assert.equal(this.element.querySelector('.notification-action').textContent.trim(), 'view');
        assert.equal(this.element.getElementsByClassName('notification-message col-sm-8').length, 1);
        assert.equal(this.element.getElementsByClassName('query-progress').length, 1);
        assert.equal(callbackSpy.called, false);
    });
});
