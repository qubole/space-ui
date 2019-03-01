# Loader

<p>To show loader for progressing state</p>

{{#docs-demo as |demo|}}
    {{#demo.example name='demo-loader-circle.hbs'}}

    {{s-loader size="small"}}

    {{/demo.example}}

    {{demo.snippet 'demo-loader-circle.hbs'}}
{{/docs-demo}}


{{#docs-demo as |demo|}}
    {{#demo.example name='demo-loader-continuous-basic.hbs'}}

    {{s-loader type="continuous" size="small"}}

    {{/demo.example}}

    {{demo.snippet 'demo-loader-continuous-basic.hbs'}}
{{/docs-demo}}


| Property | Description                              | Type   | Default |
| -------- | ---------------------------------------- | ------ | ------- |
| type     | Type of the loader  - cirlce/continuous  | String | circle  |
| size     | small/default                            | String | default |
