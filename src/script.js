window.addEventListener('load', () => {
  const answers = document.querySelectorAll('.js-content');

  answers.forEach(answer => new Toggle(answer, answers));
});


class Toggle {
  constructor(answer, answers) {
    this._answer = answer;
    this._answers = answers;

    this._wrapper = this._answer.querySelector('.js-content__wrapper');
    this._title = this._wrapper.querySelector('.js-content__title');
    this._arrow = this._wrapper.querySelector('.js-content__arrow');
    
    this._info = this._answer.querySelector('.js-content__info');


    this.addListener();
  }

  addListener() {
    this._wrapper.addEventListener('click', () => {
      this.hideAll();
      this.show();
    });
  }

  hideAll() {
    this._answers.forEach(el => {
      if (el !== this._answer) {
        const title = el.querySelector('.js-content__title');
        const arrow = el.querySelector('.js-content__arrow');
        const info = el.lastElementChild;

        title.classList.remove('content__title--active');
        arrow.classList.remove('content__arrow--active');
        info.classList.remove('content__info--active');
      }
    });
  }

  show() {
    this._title.classList.toggle('content__title--active');
    this._arrow.classList.toggle('content__arrow--active');
    this._info.classList.toggle('content__info--active');
  }
}