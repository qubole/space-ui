import Component from '@ember/component';
import layout from 'space-ui/templates/components/s-timeline/event/content/title';

export default Component.extend({
    layout,
    classNames: ['s-timeline-event-content-title'],
    classNameBindings: ['isActive:active'],
    isActive:false,
    actions: {
        toggleEvent(index) {
            this.set('isActive', !this.get('isActive'));
            this.toggleEvent(index);
        }
    }
});
