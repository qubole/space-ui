# Notification

<p>To trigger an operation</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-notification-basic.hbs'}}

{{#s-button actionName=(action "showNotification") color="primary"}}
Click Me
{{/s-button}}

{{s-notification}}

{{/demo.example}}

{{demo.snippet 'demo-notification-basic.hbs'}}
{{/docs-demo}}

| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| color      | theme - primary/secondary                                                    | String  | ""      |
| link       | link where user should navigate. It will render anchor tag if this is passed | String  | ""      |
| disabled   | Whether the input is disabled.                                               | boolean | false   |
| className  | Custom class name                                                            | String  | ""      |
| actionName | onClick event                                                                | event   | null    |
