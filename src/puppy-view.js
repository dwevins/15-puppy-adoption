'use strict';

export default class PuppyView {
  constructor(puppy, app) {
    this.puppy = puppy;
    this.app = app;
    this.puppyCard = document.createElement('li');
    this.render();
  }

  render() {
    this.generateCardSkeleton();
    this.fillCardInfo();
    this.addButtons();
  }

  generateCardSkeleton() {
    this.puppyCard.innerHTML = `
    <div class="item-image">
      <div class="item-image__container">
        <img src="" alt="" class="item-image__container--img image">
      </div>
    </div>
    <div class="item-details form">
        <div class="item-details__field form__field">
          <p class="item-details__field--title form__field--title">Name</p>
          <input type="text" class="item-details__field--input form__field--input name">
        </div>
        <div class="item-details__field">
          <p class="item-details__field--title form__field--title">Age</p>
          <input type="text" class="item-details__field--input form__field--input age">
        </div>
        <div class="item-details__field">
          <p class="item-details__field--title form__field--title">Photo URL</p>
          <input type="text" class="item-details__field--input form__field--input photo">
        </div>
        <div class="item-details__field">
          <p class="item-details__field--title form__field--title">Profile</p>
          <input type="text" class="item-details__field--input form__field--input profile">
        </div>
      <div class="item-details__buttons form__buttons">
        <button class="details-btn form__buttons--btn adopt">Adopt</button>
        <button class="details-btn form__buttons--btn update">Update</button>
      </div>
    </div>`;
  }

  fillCardInfo() {
    this.puppyCard.querySelector('.image').setAttribute('src', `${this.puppy.photoURL}`);
    this.puppyCard.querySelector('.image').setAttribute('alt', 'sweet l\'il pupper');
    this.puppyCard.querySelector('.name').setAttribute('default', `${this.puppy.name}`);
    this.puppyCard.querySelector('.age').setAttribute('default', `${this.puppy.age}`);
    this.puppyCard.querySelector('.photo').setAttribute('default', `${this.puppy.photoURL}`);
    this.puppyCard.querySelector('.profile').setAttribute('default', `${this.puppy.profile}`);
  }

  addButtons() {
    const adoptBtn = this.puppyCard.querySelector('.adopt');
    const updateBtn = this.puppyCard.querySelector('.update');
    adoptBtn.addEventListener('click', this.adopt());
    updateBtn.addEventListener('click', this.update());
  }

  adopt(id) {
    this.app.remove(id);
  }

  update() {

  }
}
