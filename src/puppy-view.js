'use strict';

export default class PuppyView {
  constructor(puppy, app) {
    this.app = app;
    this.puppy = puppy;
    this.id = puppy._id;
    this.name = puppy.name;
    this.age = puppy.age;
    this.photoURL = puppy.photoURL;
    this.profile = puppy.profile;
    this.puppyCard = document.createElement('li');
    this.fetchURL = `${this.app.fetchURL}/${this.id}`;
    this.render();
  }

  render() {
    this.generateCardSkeleton();
    this.fillCardInfo();
    this.addButtons();
  }

  generateCardSkeleton() {
    this.puppyCard.innerHTML = `
    <div class="app-list__item">
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
            <input type="text" class="item-details__field--input form__field--input photoURL">
          </div>
          <div class="item-details__field">
            <p class="item-details__field--title form__field--title">Profile</p>
            <input type="text" class="item-details__field--input form__field--input profile">
          </div>
        <div class="item-details__buttons form__buttons">
          <button class="details-btn form__buttons--btn adopt">Adopt</button>
          <button class="details-btn form__buttons--btn update">Update</button>
        </div>
      </div>
    </div>`;
  }

  fillCardInfo() {
    this.puppyCard.querySelector('.image').setAttribute('src', `${this.photoURL}`);
    this.puppyCard.querySelector('.image').setAttribute('alt', 'sweet l\'il pupper');
    this.puppyCard.querySelector('.name').defaultValue = `${this.name}`;
    this.puppyCard.querySelector('.age').defaultValue = `${this.age}`;
    this.puppyCard.querySelector('.photoURL').defaultValue = `${this.photoURL}`;
    this.puppyCard.querySelector('.profile').defaultValue = `${this.profile}`;
  }

  addButtons() {
    const adoptBtn = this.puppyCard.querySelector('.adopt');
    const updateBtn = this.puppyCard.querySelector('.update');
    adoptBtn.addEventListener('click', () => {
      this.adopt();
    });
    updateBtn.addEventListener('click', () => {
      this.update();
    });
  }

  adopt() {
    fetch(this.fetchURL, {
      method: 'delete',
    });
    this.app.remove(this.id);
  }

  update() {
    fetch(this.fetchURL, {
        method: 'put',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: this.id,
          name: this.puppyCard.querySelector('.name').value,
          age: this.puppyCard.querySelector('.age').value,
          photoURL: this.puppyCard.querySelector('.photoURL').value,
          profile: this.puppyCard.querySelector('.profile').value,
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        this.app.update(data);
      });
  }
}
