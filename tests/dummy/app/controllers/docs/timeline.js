import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  simple: {
    events: A([Ember.Object.create({
      status: 'complete',
      datetime: '2019-03-28T16:31:16.389Z',
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at leo sem. Duis eu diam vel lorem pulvinar condimentum et eget felis. Donec nec massa quis tortor tempor dapibus. Pellentesque placerat nunc hendrerit ligula faucibus, non mattis sem tempus. Aliquam dictum purus id metus vestibulum, id consectetur nibh accumsan. Suspendisse accumsan, magna at feugiat luctus, odio tellus varius elit, ac finibus ligula ex nec arcu. Sed congue mollis malesuada. Curabitur malesuada arcu a iaculis convallis. Sed sit amet varius velit. Quisque pharetra nunc sed semper convallis. Nunc at nulla risus. Suspendisse posuere finibus ultricies. Vestibulum orci tortor, mattis sed vestibulum ut, lobortis sed ipsum. Fusce consequat, neque at tempor lacinia, tellus sapien lobortis risus, eget euismod quam odio eu nisi.',
      open: false
    }), Ember.Object.create({
      status: 'active',
      datetime: 1551161632,
      title: 'Title 2',
      content: 'Message 2',
      open: false
    }), Ember.Object.create({
      status: 'inactive',
      datetime: 1551161632,
      title: 'Title 3',
      content: 'Message 3',
      open: true
    })]),
    ascending: true
  },
  complex: {
    events: A([Ember.Object.create({
      status: 'inactive',
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
      open: true
    }), Ember.Object.create({
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
      open: false
    }), Ember.Object.create({
      status: 'complete',
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
    })]),
    ascending: false
  },
  custom: {
    events: A([Ember.Object.create({
      status: 'custom-data-active-state',
      datetime: 1551161632,
      title: 'Title 1',
      content: 'Message 1',
      open: false
    }), Ember.Object.create({
      status: 'active',
      datetime: 1551161632,
      title: 'Title 2',
      content: 'Message 2',
      open: false
    }), Ember.Object.create({
      status: 'custom-data-active-state',
      datetime: 1551161632,
      title: 'Title 3',
      content: 'Message 3',
      open: true
    })]),
    ascending: true
  }
});
