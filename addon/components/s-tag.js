import Component from '@ember/component';
import layout from '../templates/components/s-tag';

export default Component.extend({
    layout,
    tagName: 'span',
    classNames: ['s-tag', 'container', 'mr5', 'fs16'],
    actions: {
        onClear() {
            if (this.get('onClose')) {
                this.get('onClose')(this.get('key'));
            }
        }
    }
});
