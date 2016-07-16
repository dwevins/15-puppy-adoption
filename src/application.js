'use strict';

import PuppyView from 'puppy-view';
import CreateFormView from 'create-form-view';

export default class ApplicationView {
  constructor(parent) {
    this.data = [];
    this.parent = parent;
    this.fetchURL = 'http://tiny-tn.herokuapp.com/collections/dwe-puppies';
    this.List = parent.querySelector('.app-list');
    this.view = '';
  }

  start() {
    this.view = new CreateFormView(this.parent, this);
    this.render();
  }

  render() {
    this.data.map((obj) => {
      return new PuppyView(obj, this.parent);
    });
  }

  getFetch() {
    fetch(this.fetchURL)
      .then((res) => res.json())
      .then((array) => {
        array.forEach((object) => {
          this.data.push(object);
        });
      });
  }

  add() {

  }

  remove() {

  }
}
