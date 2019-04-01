import Component from '@ember/component';
import layout from '../templates/components/s-radio';
import RadioButton from 'ember-radio-button/components/radio-button';

RadioButton.reopen({
    supportsDataTestProperties: true
});

export default Component.extend({
    layout
});
