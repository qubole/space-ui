import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
    current: 2, 
    actions: {
         nextStep() {
            //  Assuming in the dummy app only 4 steps are displayed as an example
            // With index for steps starting with 1
            if( this.get('current') <=3 ) {
                let x  = this.get('current') + 1;
                this.set('current', x);
            }
         },
         prevStep() {
            //  Assuming in the dummy app only 4 steps are displayed as an example
            // With index for steps starting with 1
            if( this.get('current') > 1 ) {
                let x  = this.get('current') - 1;
                this.set('current', x);
            }
         },
         exampleCallBackForStep() {
            window.alert("You have clicked on a step");
         }
     }
});