class MagicShow {
  constructor() {
    this.curtain = document.querySelector('.curtain');
    this.lamp = document.querySelector('.lamp');
    this.hang = document.querySelector('.lampObjects');
    this.content = document.querySelector('.content');
    this.rabbit = document.querySelector('.rabbit');
    this.pigeon = document.querySelector('.bird');

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.curtain.addEventListener('click', () => {
      this.curtain.classList.toggle('active');
    });

    this.lamp.addEventListener('mousedown', () => {
      this.hang.style.transform = `translateY(5px)`;
    });

    this.lamp.addEventListener('mouseup', () => {
      this.hang.style.transform = `translateY(0px)`;
    });

    this.lamp.addEventListener('click', () => {
      this.content.classList.toggle('hidden');
    });

    this.rabbit.addEventListener('click', () => {
      this.changeAnimals();
    });

    this.pigeon.addEventListener('click', () => {
      this.changeAnimals();
    });
  }

  changeAnimals() {
    this.rabbit.classList.toggle('inside');
    this.rabbit.classList.toggle('outside');
    this.pigeon.classList.toggle('inside');
    this.pigeon.classList.toggle('outside');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const magicShow = new MagicShow();
});
