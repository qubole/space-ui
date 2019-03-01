import Controller from '@ember/controller';


export default Controller.extend({
    buttonPressed: 'I am not clicked',
    isLoading: false,
    actions: {
        buttonClick() {
            this.set('buttonPressed', 'I am clicked');
        },
        toggleLoading() {
            this.toggleProperty('isLoading');
        }
    }
});
