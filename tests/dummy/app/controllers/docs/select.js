import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
    selected: 'A',
    selectOptions: A([{
        value: 'A',
        name: 'A'
    }, {
        value: 'B',
        name: 'B'
    }, {
        value: 'C',
        name: 'C'
    }]),
    actions: {
        onSelectOption(selected) {
            this.set('selected', selected);
        }
    }
});
