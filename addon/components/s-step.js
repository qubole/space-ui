import Component from '@ember/component';
import layout from '../templates/components/s-step';
import {
  computed
} from '@ember/object';
import Ember from 'ember';

export default Component.extend({
  classNames: ['s-step'],
  layout,
  classNameBindings: ['isActive'],
  isActive: computed('current', function () {
    return this.get('current') === this.get('key') ? 'active' : '';
  }),
  iconName: computed('isActive', function () {
    if(this.get('isActive') === 'active') {
      return 'edit-2';
    }
    else {
      return 'check';
    }
  }),
  actions: {
    callback() {
      if(this.get('onClick')) {
          this.get('onClick')();
      }
    }
  }
});
