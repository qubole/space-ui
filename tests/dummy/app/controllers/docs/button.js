import Controller from '@ember/controller';


export default Controller.extend({
    buttonPressed: 'I am not clicked',
    actions: {
        buttonClick() {
            this.set('buttonPressed', 'I am clicked');
        }
    }
});
