# Horizontal menu

<p>To create a dropdown menu.</p>

{{#docs-demo as |demo|}}
{{#demo.example name='demo-horizontal-menu-basic.hbs'}}


{{#s-horizontal-menu as |m|
    {{m.menu title="title" applyAction=(action "onMenuClick")
     action=(action "itemAction") pipelineId=pipelineId}}
{{/s-horizontal-menu}}

{{/demo.example}}

{{demo.snippet 'demo-horizontal-menu-basic.hbs'}}
{{/docs-demo}}

| Property   | Description                                                                  | Type    | Default |
| ---------- | ---------------------------------------------------------------------------- | ------- | ------- |
| title      | Name of the menu item                                                        | string  | ""  |
| action  | Action to be performed on clicking an item from the menu                        | String  | ""    |
| pipelineID  | Id of the unique identifier                                                 | String  | "" |
| applyAction   | Generic action that will call the "action provided"                       | string | ""   |
 
