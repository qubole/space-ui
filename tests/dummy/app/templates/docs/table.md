# Textarea

<p>To show data in tabular format</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-table-basic.hbs'}}

    {{s-table heads=headers data=data}}

{{/demo.example}}

{{demo.snippet 'demo-table-basic.hbs'}}

{{/docs-demo}}

| Property    | Description                    | Type    | Default |
| ----------- | ------------------------------ | ------- | ------- |
| headers       | Array of object with tile key                  | Array  | []      |
| data | Array of object with title as key passed in header              | Array  | []      |

