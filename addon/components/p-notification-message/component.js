import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  classNames: ['alert', 'q-notifications', 'row'],
  classNameBindings: ['alertClass', 'showNotif'],
  alertClass: Ember.computed.alias('notification.typeClass'),
  showProgress: Ember.computed('notification.progress.percentage', function(){
      return Ember.isPresent(this.get('notification.progress.percentage'));
  }),
  getMessageClass: Ember.computed('notification.actions', 'notification.icon', function(){
      let actions = this.get('notification.actions');
      let icon = this.get('notification.icon');
      if(actions && icon){
          return 'col-sm-8';
      }else if(actions){
          return 'col-sm-9';
      }else if(icon){
          return 'col-sm-10';
      }else{
          return 'col-sm-11';
      }
  }),
  showNotif: Ember.computed('notification.expired', 'direction', 'willBeDestory', 'slideIn', function() {
      if(this.get('notification.expired')){
          return 'slide-out';
      }else if(this.get('willBeDestory')) {
          return 'slide-up';
      }else if(Ember.isPresent(this.get('slideIn')) && !this.get('slideIn')){
          return ;
      }else if(this.get('direction') && this.get('direction') !== 'right'){
          let dir = this.get('direction');
          switch(dir){
              case 'up' : return 'slide-down';
              case 'down': return 'slide-up';
              default: return 'slide-in';
          }
      }else{
          return 'slide-in';
      }
  }),

  actions: {
      remove(notification){
          this.get('remove')(notification);
      },
      customAction(notification){
          notification.actions.callback();
      }
  }
});
