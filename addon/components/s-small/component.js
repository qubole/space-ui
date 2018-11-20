import Component from '@ember/component';
import layout from './template';


export default Component.extend({
    layout,
    cssClasses: '',
    willRender() {
        switch (this.get('type')) {
            case 'help':
                this.set('cssClasses', 'form-text text-muted');
                break;
            default:
                this.set('cssClasses', this.get('class'));
        }
    }
});
