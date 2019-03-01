# Space UI

Ember components that implement Space design(With Bootstrap)

## Installation

Space UI is available as ember add on

```
ember install space-ui
```

## Usage

Here is a quick example to get you started,

```
{{#s-button onClick=(action 'onSave') color="primary" cssClasses="float-right" }}
    Hello World
{{/s-button}}
```

# Components

| Name           | Semantic         | Status    |
| -------------- | ---------------- | --------- |
| Notification   | s-notification   | Bhargavi  |
| Timeline       | s-timeline       | Chandresh |
| TreeSelect     | s-timeline       | Manzoor   |
| Steps          | s-steps          | Manzoor   |
| Button         | s-button         | Done      |
| Icon           | s-icon           | Done      |
| Inline Message | s-inline-message | Done      |
| Text Input     | s-input          | Done      |
| Label          | s-label          | Done      |
| Loader         | s-loader         | Done      |
| Modal          | s-modal          | Done      |
| Radio          | s-radio          | Done      |
| Select         | s-select         | Done      |
| Checkbox       | s-checkbox       | Done      |
| Tag            | s-tag            | Done      |
| Small          | s-small          | Done      |
| Table          | s-table          | Done      |
| Text area      | s-textarea       | Done      |
| Icon Holder    | s-icon-holder    | Done      |

## Open Items

- [ ] Bootstrap 3 Support
- [ ] Documentation framework setup with Demo
- [ ] Performance
- [ ] Tests and CI
- [ ] Advance Table
- [ ] Auto Complete
- [ ] Tooltip
- [ ] DatePicker
- [ ] Switch
- [ ] Progressbar
- [ ] Upload
- [ ] Card
- [ ] List
- [ ] Popover
- [ ] Tree
- [ ] Tabs
- [ ] Improve Select Component
- [ ] Improve Radio Component
- [ ] Improve Checkbox Component
- [ ] Layout (https://ant.design/components/grid/)
- [ ] Integrate jfrog for internal use
- [ ] Remove bootstrap as base(not decided)
- [x] Add On Setup with Bootstrap 4
- [x] Move all components from Quest

### For contribution

- `git clone <repository-url>`
- `cd space-ui`
- `npm install`
- `npm link - in space repo`
- `npm link space-ui - in your project repo`

Follow this video to setup addon dev env
https://www.youtube.com/watch?v=bhJ6YzBIoWo

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## License

This project is licensed under the [MIT License](LICENSE.md).
