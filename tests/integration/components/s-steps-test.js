import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | s-steps', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders steps with title, key, current equal to 2, click on step 2, step 3, step 4', async function(assert) {

    let self = this;
    this.set('text', 'not clicked');
    let externalActionForStepOne = function() {
      self.set('text', 'clicked on step one');
    };
    let externalActionForStepTwo = function() {
      self.set('text', 'clicked on step two');
    };
    let externalActionForStepThree = function() {
      self.set('text', 'clicked on step three');
    };
    let externalActionForStepFour = function() {
      self.set('text', 'clicked on step four');
    };
    this.set('externalActionForStepOne', externalActionForStepOne);
    this.set('externalActionForStepTwo', externalActionForStepTwo);
    this.set('externalActionForStepThree', externalActionForStepThree);
    this.set('externalActionForStepFour', externalActionForStepFour);
    
    await render(hbs `
      {{#s-steps current=2 as |s|}}
          {{s.step 
              title="Step 1"
              key=1 
              onClick=externalActionForStepOne
          }}
          {{s.step 
              title="Step 2" 
              key=2
              onClick=externalActionForStepTwo
          }}
          {{s.step 
              title="Step 3" 
              key=3
              onClick=externalActionForStepThree
          }}   
          {{s.step 
              title="Step 4" 
              key=4
              onClick=externalActionForStepFour
          }}
      {{/s-steps}}
      <div id="trialText">{{text}}</div>
    `);

    assert.equal(this.element.getElementsByClassName('active').length, 1);
    assert.equal(this.element.getElementsByClassName('active')[0].querySelector('.number').textContent.trim(), '2');
    await this.element.getElementsByClassName('number')[1].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "not clicked");
    await this.element.getElementsByClassName('number')[2].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "not clicked");
    await this.element.getElementsByClassName('number')[3].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "not clicked");
    assert.equal(this.element.getElementsByClassName('active')[0].querySelector('.number').textContent.trim(), '2');
    
  });

  test('it renders steps with title, key, current equal to 2 then click on step 1, then click on step 3, step 2 , step 4', async function(assert) {
    let self = this;
    this.set('text', 'not clicked');
    let externalActionForStepOne = function() {
      self.set('text', 'clicked on step one');
    };
    let externalActionForStepTwo = function() {
      self.set('text', 'clicked on step two');
    };
    let externalActionForStepThree = function() {
      self.set('text', 'clicked on step three');
    };
    let externalActionForStepFour = function() {
      self.set('text', 'clicked on step four');
    };
    this.set('externalActionForStepOne', externalActionForStepOne);
    this.set('externalActionForStepTwo', externalActionForStepTwo);
    this.set('externalActionForStepThree', externalActionForStepThree);
    this.set('externalActionForStepFour', externalActionForStepFour);
    await render(hbs `
      {{#s-steps current=2 as |s|}}
        {{s.step 
            title="Step 1"
            key=1 
            onClick=externalActionForStepOne
        }}
        {{s.step 
            title="Step 2" 
            key=2
            onClick=externalActionForStepTwo
        }}
        {{s.step 
            title="Step 3" 
            key=3
            onClick=externalActionForStepThree
        }}   
        {{s.step 
            title="Step 4" 
            key=4
            onClick=externalActionForStepFour
        }}
      {{/s-steps}}
      <div id="trialText">{{text}}</div>
    `);
    
    assert.equal(this.element.getElementsByClassName('active').length, 1);
    assert.equal(this.element.getElementsByClassName('active')[0].querySelector('.number').textContent.trim(), '2');
    await this.element.getElementsByClassName('number')[0].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked on step one");
    assert.equal(this.element.getElementsByClassName('active')[0].querySelector('.number').textContent.trim(), '2');
    await this.element.getElementsByClassName('number')[2].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked on step one");
    await this.element.getElementsByClassName('number')[1].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked on step one");
    await this.element.getElementsByClassName('number')[3].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked on step one");  
  });

  test('it renders steps with title, key, current equal to 4 then click on step 2, then click on step 3 then step 1', async function(assert) {
    let self = this;
    this.set('text', 'not clicked');
    let externalActionForStepOne = function() {
      self.set('text', 'clicked on step one');
    };
    let externalActionForStepTwo = function() {
      self.set('text', 'clicked on step two');
    };
    let externalActionForStepThree = function() {
      self.set('text', 'clicked on step three');
    };
    let externalActionForStepFour = function() {
      self.set('text', 'clicked on step four');
    };
    this.set('externalActionForStepOne', externalActionForStepOne);
    this.set('externalActionForStepTwo', externalActionForStepTwo);
    this.set('externalActionForStepThree', externalActionForStepThree);
    this.set('externalActionForStepFour', externalActionForStepFour);
    await render(hbs `
      {{#s-steps current=4 as |s|}}
        {{s.step 
            title="Step 1"
            key=1 
            onClick=externalActionForStepOne
        }}
        {{s.step 
            title="Step 2" 
            key=2
            onClick=externalActionForStepTwo
        }}
        {{s.step 
            title="Step 3" 
            key=3
            onClick=externalActionForStepThree
        }}   
        {{s.step 
            title="Step 4" 
            key=4
            onClick=externalActionForStepFour
        }}
      {{/s-steps}}
      <div id="trialText">{{text}}</div>
    `);

    assert.equal(this.element.getElementsByClassName('active').length, 1);
    assert.equal(this.element.getElementsByClassName('active')[0].querySelector('.number').textContent.trim(), '4');
    assert.equal(this.element.getElementsByClassName('check').length, 3);
    assert.equal(this.element.getElementsByClassName('edit-2').length, 1);
    await this.element.getElementsByClassName('number')[1].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked on step two");
    await this.element.getElementsByClassName('number')[2].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked on step three");
    await this.element.getElementsByClassName('number')[0].click();
    assert.equal(self.element.querySelector('#trialText').textContent.trim(), "clicked on step one");
  });

});
