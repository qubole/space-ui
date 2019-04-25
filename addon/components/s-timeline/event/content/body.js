import Component from '@ember/component';
import layout from 'space-ui/templates/components/s-timeline/event/content/body';

export default Component.extend({
    layout,
    classNames: ['s-timeline-event-content-body'],
    classNameBindings: ['open:open']
});
