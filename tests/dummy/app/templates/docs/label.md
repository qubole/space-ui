# Label

<p>To show Label with input fields</p>

{{#docs-demo as |demo|}}
    {{#demo.example name='demo-label-basic.hbs'}}

    {{#s-label for="hellwWorldInput"}}
        Hello world
    {{/s-label}}

    {{/demo.example}}

    {{demo.snippet 'demo-label-basic.hbs'}}
{{/docs-demo}}


{{#docs-demo as |demo|}}
    {{#demo.example name='demo-label-red-basic.hbs'}}

    {{#s-label for="hellwWorldInput" cssClasses="red"}}
        Hello world in Red
    {{/s-label}}

    {{/demo.example}}

    {{demo.snippet 'demo-label-red-basic.hbs'}}
{{/docs-demo}}


| Property | Description                              | Type   | Default |
| -------- | ---------------------------------------- | ------ | ------- |
| cssClasses  | css Class on container                | String  | ""    |
