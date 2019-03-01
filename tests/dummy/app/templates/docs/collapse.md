# Collapse

<p>To show collapsable</p>

{{#docs-demo as |demo|}}

    {{#demo.example name='demo-collapse-basic.hbs'}}

        {{#s-collapse activeKey=(array 1) as | c |}}
            {{#c.s-collapse-panel key=1 title='Panel 1'}}
                <div class="pl30">Panel 1 Body</div>
            {{/c.s-collapse-panel}}
            {{#c.s-collapse-panel key=2 title='Panel 2'}}
                <div class="pl30">Panel 2 Body</div>
            {{/c.s-collapse-panel}}
            {{#c.s-collapse-panel key=3 title='Panel 3'}}
                <div class="pl30">Panel 3 Body</div>
            {{/c.s-collapse-panel}}
        {{/s-collapse}}

    {{/demo.example}}
    {{demo.snippet 'demo-collapse-basic.hbs'}}
{{/docs-demo}}


| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| activeKey  | array of panel keys
| title  | panel title                                                                      | boolean  | false  |
| key  | uniq key identifier for panel                                                      | String  | default |
| onToggle | onToggle callback event event                                                  | event   | null    |

