import Component from '@ember/component';
import {
    computed
} from '@ember/object';
import layout from '../templates/components/s-alert';
import { later } from '@ember/runloop';

export default Component.extend({
    layout,
    classNames: ['alert', 's-alert'],
    classNameBindings: ['alertClass', 'disappearing'],
    isHidden: false,
    disappearing: computed('isHidden', function() {
        return this.get('isHidden') ? 'disappearing' : '';
    }),
    alertClasses: computed(function () {
        return {
            info: 'alert-primary',
            warning: 'alert-warning',
            success: 'alert-success'
        };
    }),
    alertIcons: computed(function () {
        return {
            info: 'info',
            warning: 'alert-triangle',
            success: 'check-circle'
        };
    }),

    alertClass: computed('type', function () {
        return this.get('alertClasses')[this.get('type')];
    }),
    alertIcon: computed('type', function () {
        return this.get('alertIcons')[this.get('type')];
    }),
    actions: {
        dismissAlert() {
            this.set('isHidden', true);
            later(this, function () {
                this.set('isVisible', false);
            }, 500);
        }
    }
});
