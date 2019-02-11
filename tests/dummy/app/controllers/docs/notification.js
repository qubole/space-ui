import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import EmberObject from '@ember/object';


export default Controller.extend({
  notification: service(),
  actions: {
    showNotification() {
          this.get('notification').info({
              message: 'You have been notified',
              isPersistant: true
          });


          this.get('notification').danger({
            message: 'Something happened and we just want to inform you',
            icon: 'clock',
            isPersistant: true,
            isCloseable: true
          });
          this.get('notification').info({
            message: 'Info1',
            icon: false,
            isPersistant: false,
            isCloseable: false
          });
          let a = this.get('notification').warning({
            message: 'danger2',
            icon: 'warning-triangle',
            isPersistant: true,
            isCloseable: true
          });
          let y = this.get('notification').progress({
            message: 'Download for  command is in progress',
            progress: EmberObject.create({
              percentage: 100,
              width: '80%'
            }),
            isCloseable: false,
            actions: EmberObject.create({
              title: 'View File',
              callback: () => {
                this.dummy(a);
              }
            })
          });
          this.set('notim', y);
          this.get('notification').success({
            message: 'danger3',
            icon: 'tick-circle',
            isPersistant: true,
            isCloseable: true
          });
          this.get('notification').info({
            message: 'Query cant be empty',
            icon: 'qi-warning-circle',
            isPersistant: true,
            isCloseable: true
          });
          this.get('notification').warning({
            message: 'This command belongs to a different account. Please switch to that account to run it',
            icon: 'qi-tick',
            isPersistant: true,
            isCloseable: true,
            actions: EmberObject.create({
              title: 'Switch',
              callback: () => {
                window.location.href = 'www.abc' + '/user/select_account/?id=4';
              }
            })
          });


    }
  }
});



