'use strict';

import PuppyView from 'puppy-view';
import CreateFormView from 'create-form-view';

export default class ApplicationView {
  constructor(element) {
    this.data = [];
    this.element = element;
    this.fetchURL = 'http://tiny-tn.herokuapp.com/collections/dwe-puppies';
    this.list = element.querySelector('.app-list');
    this.view = new CreateFormView(this.element, this);
  }

  start() {
    this.getFetch()
      .then(() => {
        this.render();
      });
  }

  getFetch() {
    return fetch(this.fetchURL)
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  }

  render() {
    this.list.innerHTML = '';

    this.data.forEach((puppy) => {
      const newPup = new PuppyView(puppy, this);
      this.list.appendChild(newPup.puppyCard);
    });
  }

  add(puppy) {
    this.data = [puppy, ...this.data];
    this.render();
  }

  remove(id) {
    this.data = this.data.filter((puppy) => puppy._id !== id);
    this.render();
  }

  update(puppyIn) {
    this.data.forEach((currPuppy) => {
      if (puppyIn.puppy._id === currPuppy.puppy._id) {
        currPuppy.puppyReassign(puppyIn.puppy);
      }
    });

    this.render();
  }
}
