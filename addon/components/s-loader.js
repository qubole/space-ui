import Component from '@ember/component';
import layout from '../templates/components/s-loader';

export default Component.extend({
    layout,
    type: 'circle',
    classNames: ['s-loader'],
    tagName: 'span'
});
