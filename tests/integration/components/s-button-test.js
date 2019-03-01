import {
    module,
    test
} from 'qunit';
import {
    setupRenderingTest
} from 'ember-qunit';
import {
    render, click
} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';


module('Integration | Component | s-button', function (hooks) {
    setupRenderingTest(hooks);

    test('render basic button with action', async function (assert) {
        assert.expect(2);

        this.set('text', 'not clicked');
        this.set('externalAction', function () {
            this.set('text', 'clicked');
            assert.equal(this.element.textContent.trim(), 'Test Button clicked');
        });
        await render(hbs `
      {{#s-button onClick=(action externalAction)}}
        Test Button {{text}}
      {{/s-button}}
    `);
        assert.equal(this.element.textContent.trim(), 'Test Button not clicked');
        await click('.s-button .btn');
    });


    test('render button with color', async function (assert) {
        assert.expect(2);

        this.set('externalAction', function () {});
        await render(hbs `
        {{#s-button onClick=(action externalAction)}}
            Test Button without color
        {{/s-button}}
        `);
        assert.equal(this.element.textContent.trim(), 'Test Button without color');

        await render(hbs `
        {{#s-button color="primary" onClick=(action externalAction)}}
            Test Button with color
        {{/s-button}}
        `);
        assert.notEqual(null, this.element.querySelector('.btn.btn-primary'));
    });

    test('render button with size', async function (assert) {
        assert.expect(1);
        this.set('externalAction', function () { });

        await render(hbs `
        {{#s-button size="small" onClick=(action externalAction)}}
            Test Button with color
        {{/s-button}}
        `);
        assert.notEqual(null, this.element.querySelector('.btn.small'));
    });

    test('render button with icon', async function (assert) {
        assert.expect(1);
        this.set('externalAction', function () {});

        await render(hbs `
        {{#s-button icon="x-circle" onClick=(action externalAction)}}
            Test Button with icon
        {{/s-button}}
        `);
        assert.notEqual(null, this.element.querySelector('Button.btn svg.icon'));
    });

    test('render button with loading', async function (assert) {
        assert.expect(1);
        this.set('externalAction', function () {});

        await render(hbs `
        {{#s-button isLoading=true onClick=(action externalAction)}}
            Test Button with is Loading
        {{/s-button}}
        `);
        assert.notEqual(null, this.element.querySelector('Button.btn svg.icon'));
    });

    test('render button with custom class', async function (assert) {
        assert.expect(1);
        this.set('externalAction', function () {});

        await render(hbs `
        {{#s-button cssClasses="test" onClick=(action externalAction)}}
            Test Button with class name
        {{/s-button}}
        `);
        assert.notEqual(null, this.element.querySelector('Button.btn.test'));
    });

    test('render button with link', async function (assert) {
        this.owner.setupRouter();
        assert.expect(2);
        this.set('externalAction', function () {});

        await render(hbs `
        {{#s-button link="docs.intro" color="primary"}}
            Test Button with href
        {{/s-button}}
        `);
        assert.notEqual(null, this.element.querySelector('a').href);
        assert.ok((new RegExp('docs/intro')).test(this.element.querySelector('a').href));
    });
});
