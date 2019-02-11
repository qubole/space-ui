import EmberObject from '@ember/object';
import {
    isPresent
} from '@ember/utils';
import {
    later
} from '@ember/runloop';
import Service from '@ember/service';
import {
    A
} from '@ember/array';

const notifObj = EmberObject.extend({
    typeClass: '',
    expired: false,
    message: '',
    icon: 'qi-tick',
    isCloseable: false,
    isPersistant: false,
    actions: null,
    progress: null
});

export default Service.extend({
    messages: A(),
    pushMessage: function (options) {
        let notification = notifObj.create({
            typeClass: options.type,
            message: options.message,
            icon: options.actions ? false : options.icon,
            isCloseable: options.isCloseable,
            isPersistant: options.isPersistant,
            actions: options.actions,
            progress: options.progress
        });
        this.messages.pushObject(notification);
        if (!notification.get('isPersistant')) {
            later(this, () => {
                this.removeNotification(notification);
                notification.set('expired', true);
            }, options.timeout || 10000);
        }
        return notification;
    },
    removeNotification(notification) {
        if (!notification) {
            return;
        }
        notification.set('expired', true);
        later(this, () => {
            this.messages.removeObject(notification);
        }, 200);
    },
    clearAll() {
        this.get('messages').forEach(notification => {
            this.removeNotification(notification);
        });
    },
    error(options) {
        return this.danger(options);
    },
    failure(options) {
        return this.danger(options);
    },
    danger(options) {
        options.type = 'danger';
        return this.pushMessage(options);
    },
    warning(options) {
        options.type = 'warning';
        return this.pushMessage(options);
    },
    info(options) {
        debugger;
        options.type = 'info';
        return this.pushMessage(options);
    },
    success(options) {
        options.type = 'success';
        return this.pushMessage(options);
    },
    progress(options) {
        options.type = 'info';
        options.isPersistant = isPresent(options.isPersistant) ? options.isPersistant : true;
        options.isCloseable = isPresent(options.isCloseable) ? options.isCloseable : true;
        return this.pushMessage(options);
    }
});
