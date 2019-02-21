import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import EmberObject from '@ember/object';


export default Controller.extend({
  notification: service(),
  actions: {
    showNotification() {
          this.get('notification').danger({
            message: 'This is danger notification example with close action',
            icon: 'clock',
            isPersistent: true,
            isCloseable: true,
            closeAction: () =>{
              window.alert("You have clicked on close notification")
            }
          });
          this.get('notification').info({
            message: 'This is non persistent info notification',
            icon: false,
            isPersistent: false,
            isCloseable: false
          });
          this.get('notification').warning({
            message: 'This is warning notification',
            icon: 'warning-triangle',
            isPersistent: true,
            isCloseable: true
          });
          this.get('notification').progress({
            message: 'This is progress notification example with action',
            progress: EmberObject.create({
              percentage: 50
            }),
            isCloseable: false,
            actions: EmberObject.create({
              title: 'Action',
              callback: () => {
                window.alert("You have clicked on action button");
              }
            })
          });
          this.get('notification').success({
            message: 'This is persistent success notification',
            icon: 'tick-circle',
            isPersistent: true,
            isCloseable: false
          });
    }
  }
});
