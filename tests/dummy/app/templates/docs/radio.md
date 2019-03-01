# Radio

<p>To select single state from multiple options</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-radio-basic.hbs'}}

{{#s-radio value="test" }}
    Radio
{{/s-radio}}

{{/demo.example}}

{{demo.snippet 'demo-radio-basic.hbs'}}
{{/docs-demo}}


{{#docs-demo as |demo|}}
{{#demo.example name='demo-radio-group.hbs'}}

{{#s-radio value="A" groupValue=currentSelected onChange=changeRadio }}
    A
{{/s-radio}}
{{#s-radio value="C" groupValue=currentSelected onChange=changeRadio }}
    B
{{/s-radio}}
{{#s-radio value="D" groupValue=currentSelected onChange=changeRadio }}
    C
{{/s-radio}}


{{/demo.example}}

{{demo.snippet 'demo-radio-group.hbs'}}
{{/docs-demo}}


{{#docs-demo as |demo|}}
{{#demo.example name='demo-radio-comp.hbs'}}

{{#s-radio value="A" }}
     {{s-icon name="camera"}} Camera
{{/s-radio}}

{{/demo.example}}

{{demo.snippet 'demo-radio-comp.hbs'}}
{{/docs-demo}}






| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| value      | the unique value represented by the radio button                             | String  | ""      |
| groupValue | Selected value in group radio                                          | String  | ""  |
| onChange   | onChange event                                        | event  | null |
| disabled   | to disable                                                                 | Boolean  | false      |
| radioClass | css class on radio element | String  | ""      |
| checkedClass| classname to apply to the label element when the input it wraps is checked. block form only. defaults to "checked"                                              | boolean | false   |
| name  |  name  of element                                                           | String  | ""      |

