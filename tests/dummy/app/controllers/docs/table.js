import Controller from '@ember/controller';
import { A } from '@ember/array';


export default Controller.extend({
    headers: A([{
        title: 'Name'
    },
    {
        title: 'Age'
    }, {
        title: 'Address'
    }
    ]),
    data: A([{
        name: 'User 1',
        age: 15,
        Address: 'Bangalore, 560012'
    }, {
        name: 'User 2',
        age: 20,
        Address: 'Bangalore, 560002'
    }, {
        name: 'User 3',
        age: 24,
        Address: 'Bangalore, 560016'
    }])
});
