import Component from '@ember/component';
import Checkbox from '@ember/component/checkbox';
import layout from '../templates/components/s-checkbox';
import {
    reads
} from '@ember/object/computed';


Checkbox.reopen({
    classNames: ['s-checkbox']
});
export default Component.extend({
    layout,
    tagName: '',
    supportsDataTestProperties: true,
    isChecked: reads('checked'),
    actions: {
        onChange() {
            if (this.get('onChange')) {
                this.get('onChange')(!this.get('isChecked'));
            }
        }
    }
});
