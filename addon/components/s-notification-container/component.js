import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  notificationService: Ember.inject.service('notifications'),
  notifications: Ember.computed.alias('notificationService.messages'),
  isStacked: Ember.computed('notifications.[]', function(){
      return this.get('notifications.length') > 1;
  }),
  isFullView: false,
  slideIn: Ember.computed('isFullView', {
      get(){
          return !this.get('isFullView');
      },
      set(key, value){
          return value;
      }
  }),
  hiddenNotificationsLength: Ember.computed('notifications.length', function(){
      return this.get('notifications.length') - 1 ;
  }),
  didInsertElement(){
      this.set('slideIn', true);
  },

  actions: {
      remove(notification) {
          this.get('notificationService').removeNotification(notification);
      },
      showAll(){
          this.set('isFullView', true);
      },
      showLess(){
          this.set('willBeDestory', true);
          Ember.run.later(this, () => {
              this.set('isFullView', false);
              this.set('slideIn', false);
              this.set('willBeDestory', false);
          }, 200);
      },
      clearAll(){
          this.get('notificationService').clearAll();
      }
  }
});
