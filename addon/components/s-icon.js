import Component from '@ember/component';
import layout from '../templates/components/s-icon';
import SpreadMixin from '../mixins/spread';

export default Component.extend(SpreadMixin, {
    layout,
    tagName: ''
});
