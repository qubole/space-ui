# Steps

<p>Steps Wizard</p>

{{#docs-demo as |demo|}}
    {{#demo.example name='demo-steps.hbs'}}
        <div class="d-flex">
            {{#s-button onClick=(action "nextStep") color="primary" cssClasses="m10 removeMarginLeft"}}
                Next
            {{/s-button}}

            {{#s-button onClick=(action "prevStep") color="secondary" cssClasses="m10"}}
                Previous
            {{/s-button}}
        </div>
        {{#s-steps current=current as |s|}}
            {{s.step 
                title="Step 1"
                key=1 
                onClick=(action "exampleCallBackForStep")
            }}
            {{s.step 
                title="Step 2" 
                key=2
                onClick=(action "exampleCallBackForStep")
            }}
            {{s.step 
                title="Step 3" 
                key=3
                onClick=(action "exampleCallBackForStep")
            }}
            {{s.step 
                title="Step 4" 
                key=4
                onClick=(action "exampleCallBackForStep")
            }}
        {{/s-steps}}
    {{/demo.example}}
    {{demo.snippet 'demo-steps.hbs'}}
{{/docs-demo}}

| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| current  | current step to be selected                                                    | integer  |   1     |
| title  | step title                                                                      | string  |  |
| key  | uniq key identifier for each step                                                      | integer  |  |
| onClick | onClick callback event                                                  | event   | null    |



