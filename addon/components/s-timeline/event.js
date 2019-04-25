import Component from '@ember/component';
import layout from 'space-ui/templates/components/s-timeline/event';

export default Component.extend({
    layout,
    classNames: ['s-timeline-event'],
    cssClasses: '',
    axisCssClasses: '',
    didRender() {
        this._updateState();
    },
    _updateState() {
        if (!this.get('ascending')) {
            if (this.element.nextSibling) {
                const firstChild = this.element.nextSibling.firstChild;
                this.set('axisCssClasses', firstChild.getAttribute('class'));
            }
        }
    },
    actions: {
        toggleEvent(index) {
            this.toggleEvent(index);
        }
    }
});
