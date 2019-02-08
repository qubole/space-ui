# Input

<p>To get user input as a text field</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-input-basic.hbs'}}

{{s-input type='text' placeholder='Tell me your name' value=userInputForInput}}

{{/demo.example}}

<p class="pl15"> My name is: **{{userInputForInput}}** </p>
{{demo.snippet 'demo-input-basic.hbs'}}

{{/docs-demo}}

| Property    | Description                    | Type    | Default |
| ----------- | ------------------------------ | ------- | ------- |
| value       | input value                    | String  | ""      |
| placeholder | Place holder text              | String  | ""      |
| disabled    | Whether the input is disabled. | boolean | false   |
| readonly    | Whether the input is readonly. | boolean | false   |
| className   | Custom class name              | String  | ""      |
| focus-in    | on blur event                  | event   | null    |
