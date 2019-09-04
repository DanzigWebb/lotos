let scroll = {
  sectWrap: document.querySelector('.section-wrap'),
  step: document.querySelector('.section').scrollHeight,
  btnDawn: document.querySelector('.section-bottom__btn'),

  menu: document.querySelector('#menu'),
  sectBottom: document.querySelector('.section-bottom'),

  count: 1,
  start() {
    this.btnDawn.addEventListener('click', () => {
      this.scrollDown()
    })
  },
  scrollDown() {
    this.sectWrap.style.transform = `translateY(-${this.count * this.step}px)`;
    this.fadeFixedEl()
    this.count ++;
  },
  fadeFixedEl() {
    this.menu.classList.add('fixed-hide');
    this.sectBottom.classList.add('fixed-hide');
    setTimeout(() => {
      this.menu.classList.remove('fixed-hide');
      this.sectBottom.classList.remove('fixed-hide');
    }, 600);
  }
}

scroll.start()