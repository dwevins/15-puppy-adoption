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
    this.data = this.data.map((obj) => new PuppyView(obj, this));
    this.data.forEach((puppy) => {
      this.list.appendChild(puppy.puppyCard);
    });
  }

  add(puppy) {
    // also add to server
    this.data.push(puppy);
  }

  remove(id) {
    // also delete from server
    this.data = this.data.filter((puppy) => puppy.id !== id);
    this.render();
  }
}
