import Component from '@ember/component';
import Checkbox from '@ember/component/checkbox';
import layout from '../templates/components/s-checkbox';

Checkbox.reopen({
    classNames: ['s-checkbox']
});
export default Component.extend({
    layout,
    tagName: '',
    supportsDataTestProperties: true,
    checked: false,
    actions: {
        onCheck() {
            this.toggleProperty('checked');
            if (this.get('changeAction')) {
                this.get('changeAction')(this.get('checked'));
            }

        }
    }
});
