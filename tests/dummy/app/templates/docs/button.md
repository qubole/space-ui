# Button

<p>To trigger an operation</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-button-basic.hbs'}}


{{#s-button
  data-test-id="1"
  onClick=(action "buttonClick")
  color="primary"}}
    Click Me
{{/s-button}}

{{/demo.example}}
<p class="pl15">{{buttonPressed}}</p>

{{demo.snippet 'demo-button-basic.hbs'}}
{{/docs-demo}}


{{#docs-demo as |demo|}}

{{#demo.example name='demo-button-loading.hbs'}}

{{#s-button
  data-test-id="2"
  onClick=(action "toggleLoading")
  color="primary"
  isLoading=isLoading }}
    Show Loading
{{/s-button}}

{{/demo.example}}

{{demo.snippet 'demo-button-loading.hbs'}}
{{/docs-demo}}





| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| color      | theme - primary/secondary                                                    | String  | ""      |
| isLoading  | show loader with disabled button                                            | boolean  | false  |
| size  | size of button  - small/large/default                                             | String  | default |
| icon  | icon at left side                                                                 | String  | ""      |
| link       | link where user should navigate. It will render anchor tag if this is passed | String  | ""      |
| disabled   | Whether the button is disabled.                                               | boolean | false   |
| cssClasses  | Custom class name                                                            | String  | ""      |
| onClick (optional) | onClick event                                                                   | event   | null    |

