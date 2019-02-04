import Component from '@ember/component';
import SpreadMixin from '../mixins/spread';
import layout from '../templates/components/s-button';

export default Component.extend(SpreadMixin, {
    classNames: ['s-button'],
    layout
});
