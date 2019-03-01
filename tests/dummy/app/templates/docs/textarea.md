# Textarea

<p>To get user input as multiple line</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-textarea-basic.hbs'}}

    {{s-textarea type='text' placeholder='Add your description' value=userInputForTextArea}}

{{/demo.example}}

<p class="pl15"> Description: **{{userInputForTextArea}}** </p>
{{demo.snippet 'demo-textarea-basic.hbs'}}

{{/docs-demo}}

| Property    | Description                    | Type    | Default |
| ----------- | ------------------------------ | ------- | ------- |
| value       | input value                    | String  | ""      |
| placeholder | Place holder text              | String  | ""      |
| disabled    | Whether the input is disabled. | boolean | false   |
| cssClasses   | Custom class name              | String  | ""      |
| focus-out    | on blur event                  | event   | null    |
| rows   | native row attribute of text area    | number   |     |
