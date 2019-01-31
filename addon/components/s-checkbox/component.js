import Component from '@ember/component';
import Checkbox from '@ember/component/checkbox';
import layout from './template';

Checkbox.reopen({
    classNames: ['s-checkbox']
});
export default Component.extend({
    layout,
    tagName: '',
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
