import Controller from '@ember/controller';


export default Controller.extend({
  enableAlerts: false,
  actions: {
    showAlerts(checked) {
      this.set('enableAlerts', checked);
    }
  }
});



