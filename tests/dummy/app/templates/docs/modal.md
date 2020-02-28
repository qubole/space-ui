# Modal

<p>To show Modal</p>


{{#docs-demo as |demo|}}
    {{#demo.example name='demo-modal-basic.hbs'}}

    {{#s-button
        onClick=(action "toggleModal")
        color="primary"}}
        Show Modal
    {{/s-button}}


    {{#if isModalVisiable}}
        {{#s-modal
            modelDialogClassNames="modal-sm"
            header="Modal Header"
            onOK=(action "onOk")
            okText="OK"
            cancelText="Close"
            }}
                {{pressed}}
        {{/s-modal}}
    {{/if}}

   {{/demo.example}}

{{demo.snippet 'demo-modal-basic.hbs'}}
{{/docs-demo}}

| Property | Description                              | Type   | Default |
| -------- | ---------------------------------------- | ------ | ------- |
| header   | Modal header                             | String | ""    |
| onOK  | action callback on ok click                | event  | null    |
| okText  |Ok button text                | String  | ""    |
| onCancelAction  | action callback on ok cancel               | event  | null    |
| cancelText  | Cancel button text                       | event  | null    |
| modelDialogClassNames  | css Class on container         | String  | ""    |
