# Tag

<p>To show svg icons</p>

{{#docs-demo as |demo|}}
    {{#demo.example name='demo-icon-basic.hbs'}}

    {{s-icon name="calendar"}}

    {{/demo.example}}

    {{demo.snippet 'demo-icon-basic.hbs'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
    {{#demo.example name='demo-icon-class.hbs'}}

    {{s-icon cssClasses="red" name="camera"}}

    {{/demo.example}}

    {{demo.snippet 'demo-icon-class.hbs'}}
{{/docs-demo}}

| Property | Description                              | Type   | Default |
| -------- | ---------------------------------------- | ------ | ------- |
| name      | name of the icon, this component will search the icons based svgjar configuration  | String | null    |
| cssClasses  | css Class on container                                | String  | ""    |
