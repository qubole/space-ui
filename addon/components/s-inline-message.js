import Component from '@ember/component';
import layout from '../templates/components/s-inline-message';

export default Component.extend({
    layout,
    cssClasses: '',
    classNames: ['s-inline-message', 'fs12'],
    willRender() {
        switch (this.get('type')) {
            case 'error':
                this.set('cssClasses', 'form-text error');
                break;
            default:
                this.set('cssClasses', this.get('class'));
        }
    }
});
