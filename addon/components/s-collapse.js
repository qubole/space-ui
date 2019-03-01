import Component from '@ember/component';
import layout from '../templates/components/s-collapse';
import { computed } from '@ember/object';

function defaultTo(value) {
    return computed({
        get() {
            return value;
        },
        set(_, newVal) {
            return newVal === undefined ? value : newVal;
        }
    });
}

export default Component.extend({
    layout,
    activeKey: defaultTo([]),
    actions: {
        onToggle(key, isActive) {
            const allKeys = isActive ? this.get('activeKey').filter((each) => each != key) : [...this.get('activeKey'), key];
            this.set('activeKey', allKeys);
        }
    }
});
