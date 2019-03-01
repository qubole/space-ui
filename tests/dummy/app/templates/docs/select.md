# Select

<p>To Select single value from dropdown</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-button-basic.hbs'}}


{{s-select options=selectOptions onChange=(action "onSelectOption") value=selected }}
{{/demo.example}}
<p class="pl15">Selected Option: {{selected}}</p>
{{demo.snippet 'demo-button-basic.hbs'}}
{{/docs-demo}}





| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| options      | Array of object with value and name. Eg [{value:'A', name:'Test'}]         | String  | ""      |
| selected  | selected value                                           | boolean  | false  |
| disabled  | to disable whole select                                                         | String  | ""      |
| disable  | disable in options object will disable specific option                         | String  | ""      |
| onChange | onChange event                                                                 | event   | null    |
| focusOut | onBlur event                                                                   | event   | null    |

