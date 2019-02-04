import Component from '@ember/component';
import layout from '../templates/components/s-icon-holder';

export default Component.extend({
    layout,
    classNames: ['s-icon-holder'],
    classNameBindings: ['active'],
    active: true
});
