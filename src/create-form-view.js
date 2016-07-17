'use strict';

export default class CreateFormView {
  constructor(parent, app) {
    this.app = app;
    this.form = parent.querySelector('.dropdown');
    this.show = parent.querySelector('.show');
    this.save = parent.querySelector('.save');
    this.addButtons();
  }

  addButtons() {
    this.show.addEventListener('click', () => { this.showForm(); });
    this.save.addEventListener('click', () => { this.saveForm(); });
  }

  showForm() {
    if (this.form.classList.contains('hidden')) {
      this.form.classList.remove('hidden');
    } else {
      this.form.classList.add('hidden');
    }
  }

  saveForm() {

  }
}
