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
                const sibiling = this.element.nextSibling;
                const axisCssClasses = sibiling.getAttribute('class').replace('s-timeline-event ember-view', '').trim();
                this.set('axisCssClasses', axisCssClasses);
            }
        }
    },
    actions: {
        toggleEvent(index) {
            this.toggleEvent(index);
        }
    }
});
