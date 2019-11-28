import Component from '@ember/component';
import layout from '../templates/components/s-modal';

export default Component.extend({
    layout,
    classNames: ['s-modal'],
    isVisible: true,
    actions: {
        onCancel() {
            this.set('isVisible', false);
            if (this.get('onCancelAction')) {
                this.get('onCancelAction')();
            }
        }
    }

});
