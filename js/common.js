let mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  // loop: true,
  mousewheel: {
    invert: false,
  },
})

let scroll = {
  sectWrap: document.querySelector('.section-wrap'),
  btnDawn: document.querySelector('.section-bottom__btn'),
  menu: document.querySelector('#menu'),
  menuLinks: document.querySelectorAll('.menu__item'),
  sectBottom: document.querySelector('.section-bottom'),

  count: 0,
  fix: true,

  start() {
    this.changeDinamicContent();
    this.addActiveBtn()
    this.btnDawn.addEventListener('click', ()=> {
      mySwiper.slideNext()
    })
    mySwiper.on('slideChange', () => {
      this.changeDinamicContent();
      this.addActiveBtn();
      menu.menuShow = false
    });
    this.menuLinks.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        mySwiper.slideTo(i);
        this.addActiveBtn()
      })
    });
  },
  addActiveBtn() {
    this.menuLinks.forEach((btn, i) => {
      btn.classList.remove('active');
      this.menuLinks[mySwiper.activeIndex].classList.add('active')
    })
  },
  changeDinamicContent() {
    // this.fadeFixedEl();
    this.sectNumberContent();
    this.menuNaming();
  },
  fadeFixedEl() { // Скрытие фиксированных блоков при пролистывании слайда
    this.menu.classList.add('fixed-hide');
    this.sectBottom.classList.add('fixed-hide');
    setTimeout(() => {
      this.menu.classList.remove('fixed-hide');
      this.sectBottom.classList.remove('fixed-hide');
    }, 600);
  },
  sectNumberContent() { // Нумеровка слайдов
    let activeSlide = document.querySelector('.section-number__active');
    let allSlide = document.querySelector('.section-number__all');
    activeSlide.innerHTML = ("0" + (mySwiper.activeIndex + 1)).slice(-2);
    allSlide.innerHTML = ("- 0" + mySwiper.slides.length);
  },
  menuNaming() { // Именование слайдов
    let content = {
      menu: ['Добро пожаловать', 'Направления и классы', 'Пробное занятие', 'Преподаватели', 'Абонементы', 'Расписание', 'Отзывы', 'Акции', 'Контакты', 'Вернуться'],
    };
    let el = this.menu.querySelector('.menu-sectname');
    el.innerHTML = content.menu[mySwiper.activeIndex];
    this.btnDawn.querySelector('span').innerHTML = content.menu[mySwiper.activeIndex + 1];
  },

}

scroll.start()
mySwiper.slideTo(3)