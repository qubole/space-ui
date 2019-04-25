import Component from '@ember/component';
import layout from 'space-ui/templates/components/s-timeline/event/content/title';

export default Component.extend({
    layout,
    classNames: ['s-timeline-event-content-title'],
    actions: {
        toggleEvent(index) {
            this.toggleEvent(index);
        }
    }
});
