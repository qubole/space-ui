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
{{demo.snippet 'demo-button-basic.hbs'}}
{{/docs-demo}}

<p class="pl15">{{buttonPressed}}</p>

<p>You can also pass an action directly</p>
{{#docs-snippet name='button-with-action.hbs' unindent=true language='handlebars'}}
  {{#s-button
    data-test-id="2"
    action="buttonClick"
    color="primary"}}
      Click Me
  {{/s-button}}
{{/docs-snippet}}

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
| id      | ID of the button                                                    | String  | ""      |
| isLoading  | show loader with disabled button                                            | boolean  | false  |
| size  | size of button  - small/large/default                                             | String  | default |
| icon  | icon at left side                                                                 | String  | ""      |
| link       | link where user should navigate. It will render anchor tag if this is passed | String  | ""      |
| disabled   | Whether the button is disabled.                                               | boolean | false   |
| cssClasses  | Custom class name                                                            | String  | ""      |
| onClick (optional) | onClick event                                                                   | event   | null    |
| action (optional) | action to trigger on click                                                                   | event   | null    |
| onMouseEnter (optional) | action to trigger on mouse enter of component                                                                   | event   | null    |
| onMouseLeave (optional) | action to trigger on mouse leave of component                                                                   | event   | null    |

