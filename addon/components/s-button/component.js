import Component from '@ember/component';
import layout from './template';
import SpreadMixin from '../../mixins/spread';

export default Component.extend(SpreadMixin, {
    layout,
    actions: {
        test() {

        }
    }
});
