import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  classNames: ['s-tag', 'container', 'mr5', 'fs16'],
  classNameBindings: ['getType'],
  getType: Ember.computed('type', function(){
    return this.get('type');
  }),
  actions: {
    onClear() {
      if (this.get('onClose')) {
        this.get('onClose')(this.get('key'));
      }
    }
  }
});
