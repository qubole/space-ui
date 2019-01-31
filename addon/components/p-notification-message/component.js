import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Component.extend({
    layout,
    classNames: ['alert', 'q-notifications', 'row'],
    classNameBindings: ['alertClass', 'showNotif'],
    alertClass: computed.alias('notification.typeClass'),
    showProgress: computed('notification.progress.percentage', function(){
        return isPresent(this.get('notification.progress.percentage'));
    }),
    getMessageClass: computed('notification.{actions,icon}', function(){
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
    showNotif: computed('notification.expired', 'direction', 'willBeDestory', 'slideIn', function() {
        if(this.get('notification.expired')){
            return 'slide-out';
        }else if(this.get('willBeDestory')) {
            return 'slide-up';
        }else if(isPresent(this.get('slideIn')) && !this.get('slideIn')){
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
        customAction(){
            this.get('secondaryAction')();
        }
    }
});
