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
    const dataAsPuppies = this.data.map((obj) => new PuppyView(obj, this));

    dataAsPuppies.forEach((puppy) => {
      this.list.appendChild(puppy.puppyCard);
    });
  }

  add(puppy) {
    this.data.unshift(puppy);
    this.render();
  }

  remove(id) {
    this.data = this.data.filter((puppy) => puppy._id !== id);
    this.render();
  }
}
