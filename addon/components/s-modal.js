import Component from '@ember/component';
import layout from '../templates/components/s-modal';

export default Component.extend({
  layout,
  classNames: ['s-modal'],
  isVisible: true,
  actions: {
    onCancelAction() {
      this.set('isVisible', false);
      if (this.get('onCancel')) {
        this.get('onCancel')();
      }
    }
  }

});
