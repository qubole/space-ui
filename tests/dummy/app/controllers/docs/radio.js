import Controller from '@ember/controller';


export default Controller.extend({
    currentSelected: null,
    actions: {
        changeRadio(selected) {
            this.set('currentSelected', selected);
        }
    }
});
