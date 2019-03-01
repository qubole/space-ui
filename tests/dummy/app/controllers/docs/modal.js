import Controller from '@ember/controller';


export default Controller.extend({
    isModalVisiable: false,
    pressed: 'Body content will change on clicking ok button',
    actions: {
        toggleModal() {
            this.toggleProperty('isModalVisiable');
        },
        onOk() {
            this.set('pressed', 'Changed');
        }
    }
});
