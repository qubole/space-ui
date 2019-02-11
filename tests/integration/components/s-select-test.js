import {
    module,
    test
} from 'qunit';
import {
    setupRenderingTest
} from 'ember-qunit';
import {
    render
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-select', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

        //     await render(hbs `{{s-select}}`);

        //     assert.equal(this.element.textContent.trim(), '');
        //     this.set('filterOptions.dropdownOptions', []);
        //     // Template block usage:
        //     await render(hbs `
        //   {{s-select options=filterOptions.dropdownOptions onChangeName=(action "onFilterConditionSelect")}}
        // `);

        assert.equal(this.element.textContent.trim(), '');
    });
});
