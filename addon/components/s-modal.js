import Component from '@ember/component';
import layout from '../templates/components/s-modal';
import {
  computed
} from '@ember/object';

export default Component.extend({
  layout,
  classNames: ['s-modal'],
  actionPassed: computed('onCancel', 'onOK', function(){
    if(this.get('onCancel') || this.get('onOK')){
      return true;
    }
    return false;
  })


});
