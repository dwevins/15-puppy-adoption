'use strict';

import PuppyView from 'puppy-view';
import CreateFormView from 'create-form-view';

export default class ApplicationView {
  constructor(app) {
    this.data = [];
    this.app = app;
    // this.fetchURL = 'http://tiny-tn.herokuapp.com/collections/dwe-puppies';
    this.fetchURL = 'http://tiny-tn.herokuapp.com/collections/ryan-puppy';
    this.list = app.querySelector('.app-list');
    this.view = '';
  }

  start() {
    this.view = new CreateFormView(this.app, this);
    this.getFetch();
    this.render();
  }

  render() {
    this.list.innerHTML = '';
    this.data.map((obj) => {
      return new PuppyView(obj, this.app);
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
