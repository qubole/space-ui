import Component from '@ember/component';
import layout from './template';

export default Component.extend({
    layout,
    tagName: 'span',
    classNames: ['container', 'mr5', 'fs16'],
    actions: {
        onClear() {
            if (this.get('onClose')) {
                this.get('onClose')(this.get('key'));
            }
        }
    }
});
