import Component from '@ember/component';
import SpreadMixin from '../mixins/spread';
import layout from '../templates/components/s-button';

export default Component.extend(SpreadMixin, {
    classNames: ['s-button'],
    layout,
    click() {
      this.sendAction();
      if (this.get('onClick')) {
        this.get('onClick')();
      }
    },
    actions: {
      onMouseEnter() {
        if (this.get('onMouseEnter')) {
          this.get('onMouseEnter')();
        }
      },
      onMouseLeave() {
        if (this.get('onMouseLeave')) {
          this.get('onMouseLeave')();
        }
      }
    }
});
