import Component from '@ember/component';
import layout from '../templates/components/p-notification-instance';
import {
    computed
} from '@ember/object';
import {
    isPresent
} from '@ember/utils';

export default Component.extend({
    layout,
    classNames: ['alert', 'q-notifications', 'row', 'fs14'],
    classNameBindings: ['alertClass', 'showNotif'],
    alertClass: computed.alias('notification.typeClass'),
    showProgress: computed('notification.progress.percentage', function () {
        return isPresent(this.get('notification.progress.percentage'));
    }),
    action: computed.alias('notification.actions'),
    icon: computed.alias('notification.icon'),
    showNotif: computed('notification.expired', 'direction', 'willBeDestory', 'slideIn', function () {
        if (this.get('notification.expired')) {
            return 'slide-out';
        } else if (this.get('willBeDestory')) {
            return 'slide-up';
        } else if (isPresent(this.get('slideIn')) && !this.get('slideIn')) {
            return;
        } else if (this.get('direction') && this.get('direction') !== 'right') {
            let dir = this.get('direction');
            switch (dir) {
                case 'up':
                    return 'slide-down';
                case 'down':
                    return 'slide-up';
                default:
                    return 'slide-in';
            }
        } else {
            return 'slide-in';
        }
    }),

    actions: {
        remove(notification) {
            this.get('remove')(notification);
        },
        customAction() {
            this.get('secondaryAction')();
        }
    }
});
