import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { htmlSafe } from '@ember/template';

export default Component.extend({
    layout,
    cssClasses: '',
    progressBarWidth: computed('progress', function(){
        let width = this.get('progress');
        if(isPresent(width)){
            return new htmlSafe(`width: ${width}%;`);
        }else{
            return '';
        }
    })
});
