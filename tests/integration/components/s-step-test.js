import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-step', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders step with title, key, current equal to key', async function(assert) {
    await render(hbs `
      {{s-step 
        current=1
        title="Step 1"
        key=1
      }}
    `);
    assert.equal(this.element.querySelector('.title').textContent.trim(), 'Step 1');
    assert.equal(this.element.querySelector('.number').textContent.trim(), '1');
    assert.equal(this.element.getElementsByClassName('active')[0].querySelector('.number').textContent, '1');
    assert.equal(this.element.getElementsByClassName('edit-2').length, 1);
    assert.equal(this.element.getElementsByClassName('check').length, 0);
  });

  test('it renders step with title, key, current not equal to key', async function(assert) {
    let self = this;
    this.set('text', 'not clicked');
    let externalAction = function() {
      self.set('text', 'clicked');
      assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked");
    };
    this.set('externalAction', externalAction);
    await render(hbs `
      {{s-step 
        current=2
        title="Step 1"
        key=1
        onClick=externalAction
      }}
      <div id="trialText">{{text}}</div>
    `);
    assert.equal(this.element.querySelector('.title').textContent.trim(), 'Step 1');
    assert.equal(this.element.querySelector('.number').textContent.trim(), '1');
    assert.equal(this.element.getElementsByClassName('active').length, 0);
    assert.equal(this.element.getElementsByClassName('edit-2').length, 0);
    assert.equal(this.element.getElementsByClassName('check').length, 1);
    await this.element.getElementsByClassName('number')[0].click();
  });

});
