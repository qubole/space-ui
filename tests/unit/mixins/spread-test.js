import EmberObject from '@ember/object';
import SpreadMixin from 'space-ui/mixins/spread';
import { module, test } from 'qunit';

module('Unit | Mixin | spread', function() {
    // Replace this with your real tests.
    test('it works', function (assert) {
        let SpreadObject = EmberObject.extend(SpreadMixin);
        let subject = SpreadObject.create();
        assert.ok(subject);
    });
});
