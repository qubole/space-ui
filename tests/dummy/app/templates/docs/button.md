# Button

<p>To trigger an operation</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-button-basic.hbs'}}

{{#s-button actionName=(action "buttonClick") color="primary"}}
Click Me
{{/s-button}}

{{/demo.example}}

<p class="pl15">{{buttonPressed}}</p>
{{demo.snippet 'demo-button-basic.hbs'}}
{{/docs-demo}}

| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| color      | theme - primary/secondary                                                    | String  | ""      |
| link       | link where user should navigate. It will render anchor tag if this is passed | String  | ""      |
| disabled   | Whether the input is disabled.                                               | boolean | false   |
| className  | Custom class name                                                            | String  | ""      |
| actionName | onClick event                                                                | event   | null    |
