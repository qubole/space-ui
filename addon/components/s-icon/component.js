import Component from '@ember/component';
import SpreadMixin from '../../mixins/spread';
import layout from './template';

export default Component.extend(SpreadMixin, {
    layout,
    tagName: ''
});
