# Timeline

<p>To generate timeline for events</p>

{{#docs-demo as |demo|}}
  <p class="pl15">Simple Timeline</p>
  {{#demo.example name='demo-timeline-simple.hbs'}}
    {{#s-timeline
        events=simple.events
        ascending=simple.ascending
        custom=simple.custom
        customStates=simple.customStates as |event|}}
      {{#event.datetime as |datetime|}}
        {{datetime}}
      {{/event.datetime}}
      {{#event.content as |content|}}
        {{#content.title as |title|}}
          {{title}}
        {{/content.title}}
        {{#content.body as |body|}}
          {{body}}
        {{/content.body}}
      {{/event.content}}
    {{/s-timeline}}
  {{/demo.example}}

  <div class="hidden">
    {{#demo.example name='demo-timeline-simple-data.hbs'}}
      A([
        Ember.Object.create({
          status: 'complete',
          datetime: 1551161632,
          title: 'Title 1',
          content: 'Message 1',
          open: false
        }), 
        Ember.Object.create({
          status: 'active',
          datetime: 1551161632,
          title: 'Title 2',
          content: 'Message 2',
          open: false
        }), 
        Ember.Object.create({
          status: 'inactive',
          datetime: 1551161632,
          title: 'Title 3',
          content: 'Message 3',
          open: true
        })
      ])
    {{/demo.example}}
  </div>

  {{demo.snippet 'demo-timeline-simple.hbs'}}
  {{demo.snippet 'demo-timeline-simple-data.hbs' label='events' language='js'}}

{{/docs-demo}}


{{#docs-demo as |demo|}}
  <p class="pl15">Complex Timeline</p>
  {{#demo.example name='demo-timeline-complex.hbs'}}
    {{#s-timeline
        events=complex.events
        ascending=complex.ascending
        custom=complex.custom
        customStates=complex.customStates as |event|}}
      {{#event.datetime as |datetime|}}
        {{datetime}}
      {{/event.datetime}}
      {{#event.content as |content|}}
        {{#content.title as |title|}}
          {{title}}
        {{/content.title}}
        {{#content.body as |body|}}
          {{body}}
        {{/content.body}}
      {{/event.content}}
    {{/s-timeline}}
  {{/demo.example}}

  <div class="hidden">
    {{#demo.example name='demo-timeline-complex-data.hbs'}}
      A([Ember.Object.create({
        status: 'complete',
        datetime: 1551161632,
        title: {
          component: 'custom-timeline-title',
          componentArgs: {}
        },
        content: {
          component: 'custom-timeline-content',
          componentArgs: {}
        },
        open: true
      }), Ember.Object.create({
        status: 'active',
        datetime: 1551161632,
        title: {
          component: 'custom-timeline-title',
          componentArgs: {}
        },
        content: {
          component: 'custom-timeline-content',
          componentArgs: {}
        },
        open: false
      }), Ember.Object.create({
        status: 'inactive',
        datetime: 1551161632,
        title: {
          component: 'custom-timeline-title',
          componentArgs: {}
        },
        content: {
          component: 'custom-timeline-content',
          componentArgs: {
            message: 'hello'
          }
        },
        open: false
      })])
    {{/demo.example}}
  </div>

  {{demo.snippet 'demo-timeline-complex.hbs'}}
  {{demo.snippet 'demo-timeline-complex-data.hbs' label='events' language='js'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  <p class="pl15">Custom Simple Timeline</p>
  {{#demo.example name='demo-timeline-custom-simple.hbs'}}
    {{#s-timeline
        events=custom.events
        ascending=custom.ascending
        custom=custom.custom
        customStates=custom.customStates
        cssClasses="custom-timeline" as |event|}}
      {{#event.datetime as |datetime|}}
        {{datetime}}
      {{/event.datetime}}
      {{#event.content as |content|}}
        {{#content.title as |title|}}
          {{title}}
        {{/content.title}}
        {{#content.body as |body|}}
          {{body}}
        {{/content.body}}
      {{/event.content}}
    {{/s-timeline}}
  {{/demo.example}}

  <div class="hidden">
    {{#demo.example name='demo-timeline-custom-simple-data.hbs'}}
      A([
        Ember.Object.create({
          status: 'complete',
          datetime: 1551161632,
          title: 'Title 1',
          content: 'Message 1',
          open: false
        }), 
        Ember.Object.create({
          status: 'active',
          datetime: 1551161632,
          title: 'Title 2',
          content: 'Message 2',
          open: false
        }), 
        Ember.Object.create({
          status: 'inactive',
          datetime: 1551161632,
          title: 'Title 3',
          content: 'Message 3',
          open: true
        })
      ])
    {{/demo.example}}
  </div>

  <div class="hidden">
    {{#demo.example name='demo-timeline-custom-simple-style.hbs'}}
      .custom-timeline {
        .s-timeline-event {
          .s-timeline-event-datetime {
            .axis {
              &.custom-data-active-state {
                &::before {
                  background: #DF3D11;
                }
              }
            }

            .custom-data-active-state {
              &::after {
                border-color: #DF3D11;
                background-color: #DF3D11;
              }
            }
          }
        }
      }
    {{/demo.example}}
  </div>


  {{demo.snippet 'demo-timeline-custom-simple.hbs'}}
  {{demo.snippet 'demo-timeline-custom-simple-data.hbs' label='events' language='js'}}
  {{demo.snippet 'demo-timeline-custom-simple-style.hbs' label='style' language='css'}}
{{/docs-demo}}


| Property        | Description                                               | Type              | Default     |
| --------------- | --------------------------------------------------------- | ----------------- | ----------- |
| events          | This describes the data for the timeline events           | Ember.A / Object  | A([]) / []  |
| ascending       | This describes the data displayed to be ascending         | Boolean           | true        |
| custom          | This describes the timeline should display custom states  | Boolean           | false       |
| customStates    | This describes the custom state definition                | Object            | {}          |
