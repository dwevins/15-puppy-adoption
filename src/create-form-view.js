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
    const formValues = {
      name: this.form.querySelector('.name-input').value,
      age: this.form.querySelector('.age-input').value,
      photoURL: this.form.querySelector('.photoURL-input').value,
      profile: this.form.querySelector('.profile-input').value,
    };

    fetch(this.app.fetchURL, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
    .then((res) => res.json())
    .then((data) => {
      this.clearForm();
      this.showForm();
      this.app.add(data);
    });
  }

  clearForm() {
    this.form.querySelector('.name-input').value = '';
    this.form.querySelector('.age-input').value = '';
    this.form.querySelector('.photoURL-input').value = '';
    this.form.querySelector('.profile-input').value = '';
  }
}
