import Component from '@ember/component';
import layout from 'space-ui/templates/components/s-timeline';
import EmberObject from '@ember/object';

export default Component.extend({
    layout,
    classNames: ['s-timeline'],
    classNameBindings: ['ascending:ascending:descending'],
    cssClasses: '',
    ascending: true,
    actions: {
        toggleEvent(index) {
            const eventIndex = this.get('events').objectAt(index);
            let eventObject;

            if (eventIndex instanceof EmberObject) {
                eventObject = eventIndex;
            } else {
                eventObject = EmberObject.extend(eventIndex).create();
            }

            eventObject.toggleProperty('open');
        }
    }
});

