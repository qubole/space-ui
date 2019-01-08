import Ember from 'ember';

const notifObj = Ember.Object.extend({
    typeClass: '',
    expired: false,
    message: '',
    icon: 'qi-tick',
    isCloseable: false,
    isPersistant: false,
    actions: null,
    progress: null
});

export default Ember.Service.extend({
    messages: Ember.A(),
    pushMessage: function(options) {
        let notification = notifObj.create({
            typeClass: options.type,
            message: options.message,
            icon: options.actions ? false : options.icon,
            isCloseable: options.isCloseable,
            isPersistant: options.isPersistant,
            actions: options.actions,
            progress: options.progress
        });
        Ember.Logger.info('Pushing notification to messages queue. Message: ' + notification.get('message'));
        this.messages.pushObject(notification);
        if(!notification.get('isPersistant')){
            Ember.run.later(this, () => {
                this.removeNotification(notification);
                notification.set('expired', true);
            }, 10000);
        }
        return notification;
    },
    removeNotification(notification){
        if(!notification){
            return;
        }
        notification.set('expired', true);
        Ember.run.later(this, () => {
            Ember.Logger.info('Removing notification from queue. Message: ' + notification.get('message'));
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
        options.type = 'info';
        return this.pushMessage(options);
    },
    success(options) {
        options.type = 'success';
        return this.pushMessage(options);
    },
    progress(options){
        options.type = 'info';
        options.isPersistant = Ember.isPresent(options.isPersistant) ? options.isPersistant : true;
        options.isCloseable = Ember.isPresent(options.isCloseable) ? options.isCloseable : true;
        return this.pushMessage(options);
    }
});
