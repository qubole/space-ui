# Alerts

<p>Short messages to provide contextual feedback.</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-alerts.hbs'}}


{{#s-alert
    dismissable=true type='info'}}
      This is a simple info alert.
{{/s-alert}}

{{/demo.example}}

{{demo.snippet 'demo-alerts.hbs'}}
{{/docs-demo}}







| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| dismissable      | Specifies whether the alert can be dismissed.                                | boolean  | false  |

