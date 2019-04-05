import Component from '@ember/component';

export default Component.extend({
  // Adding our action function
  actions: {
    showPerson(person) {
      alert(person);
    }
  }
});
