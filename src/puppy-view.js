'use strict';

export default class PuppyView {
  constructor(puppy, app) {
    this.puppy = puppy;
    this.app = app;
    this.puppyCard = document.createElement('li');
    this.populateCard();
  }

  populateCard() {
    this.generateCardSkeleton();
    this.fillCardInfo();
  }

  generateCardSkeleton() {
    this.puppyCard.innerHTML = `
    <div class="item-image">
      <div class="item-image__container">
        <img src="http://placecage.com/200/200" alt="" class="item-image__container--img">
      </div>
    </div>
    <div class="item-details form">
        <div class="item-details__field form__field">
          <p class="item-details__field--title form__field--title">Name</p>
          <input type="text" class="item-details__field--input form__field--input">
        </div>
        <div class="item-details__field">
          <p class="item-details__field--title form__field--title">Age</p>
          <input type="text" class="item-details__field--input form__field--input">
        </div>
        <div class="item-details__field">
          <p class="item-details__field--title form__field--title">Photo URL</p>
          <input type="text" class="item-details__field--input form__field--input">
        </div>
        <div class="item-details__field">
          <p class="item-details__field--title form__field--title">Profile</p>
          <input type="text" class="item-details__field--input form__field--input">
        </div>
      <div class="item-details__buttons form__buttons">
        <button class="details-btn form__buttons--btn">Adopt</button>
        <button class="details-btn form__buttons--btn">Update</button>
      </div>
    </div>`;
  }

  fillCardInfo() {

  }
}
