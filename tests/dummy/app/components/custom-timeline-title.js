import Component from '@ember/component';
import SpreadMixin from 'space-ui/mixins/spread';

export default Component.extend(SpreadMixin, {
  tagName: 'div',
  classNames: ['custom-timeline-title']
});
