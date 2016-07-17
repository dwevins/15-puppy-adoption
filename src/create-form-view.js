'use strict';

export default class CreateFormView {
  constructor(app, form) {
    this.app = app;
    this.form = form;
    this.show = this.app.querySelector('.show');
    this.save = this.form.querySelector('.save');
    this.addButtons();
  }

  addButtons() {
    this.show.addEventListener('click', this.showForm());
    this.save.addEventListener('click', this.saveForm());
  }

  showForm() {
    const isHidden = this.form.classList.contains('hidden');
    this.form.classList.toggle('hidden', isHidden);
  }
}
