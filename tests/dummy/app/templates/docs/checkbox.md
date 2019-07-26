# Checkbox

<p>To select multiple values from several options. If there is one checkbox, can be use as toggle between two states</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-checkbox-basic.hbs'}}


{{#s-checkbox
    onChange=(action "showAlerts")
    checked=enableAlerts}}
      On
{{/s-checkbox}}

{{/demo.example}}
<p class="pl15">Checkbox status : {{enableAlerts}}</p>

{{demo.snippet 'demo-checkbox-basic.hbs'}}
{{/docs-demo}}







| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| checked      | Specifies whether the checkbox is selected.                                | boolean  | false  |
| data-test-id  | test element identifier                                                   | String  | ""    |
| name  | name of the elements                                                              | String  | default |
| disabled   | Whether the checkbox is disabled.                                            | boolean | false   |
| cssClasses  | Custom class name                                                           | String  | ""      |
| onChange | onChange event                                                                 | event   | null    |

