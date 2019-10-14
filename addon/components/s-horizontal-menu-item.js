import Component from '@ember/component';

export default Component.extend({
  actions: {
    doAction(){
      if (this.get('applyAction')) {
        this.get('applyAction')(this.action, this.pipelineId);
      }
    }
  }
});
