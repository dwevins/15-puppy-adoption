'use strict';

import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(parent) {
    this.data = [];
    this.parent = parent;
    this.fetchURL = 'http://tiny-tn.herokuapp.com/collections/dwe-puppies';
  }

  render() {
    this.getFetch();
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
