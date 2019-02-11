import Component from '@ember/component';
import layout from '../templates/components/s-notification';

import {
    computed
} from '@ember/object';
import {
    inject as service
} from '@ember/service';
import {
    later
} from '@ember/runloop';

export default Component.extend({
    layout,
    classNames: ['s-notification'],
    notificationService: service('notification'),
    notifications: computed.alias('notificationService.messages'),
    isStacked: computed('notifications.[]', function () {
        return this.get('notifications.length') > 1;
    }),
    isFullView: false,
    slideIn: computed('isFullView', {
        get() {
            return !this.get('isFullView');
        },
        set(key, value) {
            return value;
        }
    }),
    hiddenNotificationsLength: computed('notifications.length', function () {
        return this.get('notifications.length') - 1;
    }),
    didInsertElement() {
        this.set('slideIn', true);
    },

    actions: {
        remove(notification) {
            this.get('notificationService').removeNotification(notification);
        },
        showAll() {
            this.set('isFullView', true);
        },
        showLess() {
            this.set('willBeDestory', true);
            later(this, () => {
                this.set('isFullView', false);
                this.set('slideIn', false);
                this.set('willBeDestory', false);
            }, 200);
        },
        clearAll() {
            this.get('notificationService').clearAll();
        }
    }
});
