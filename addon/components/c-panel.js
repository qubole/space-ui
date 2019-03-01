import Component from '@ember/component';
import layout from '../templates/components/c-panel';
import {
    computed
} from '@ember/object';

export default Component.extend({
    layout,
    classNames: ['c-panel'],
    isActive: computed('activeKey', function () {
        return this.get('activeKey').includes(this.get('key'));
    })
});
