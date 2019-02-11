# Tag

<p>To get user input as a text field</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-tags-basic.hbs'}}

{{#s-tag key="v0.1" onClose=(action "clearTag")}}v0.1{{/s-tag}}

{{/demo.example}}

{{demo.snippet 'demo-tags-basic.hbs'}}

{{/docs-demo}}

| Property | Description                              | Type   | Default |
| -------- | ---------------------------------------- | ------ | ------- |
| key      | to identify tag for operation like clear | String | null    |
| onClose  | Clear tag                                | event  | null    |
