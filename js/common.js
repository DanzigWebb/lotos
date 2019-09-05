let scroll = {
  sectWrap: document.querySelector('.section-wrap'),
  step: document.querySelector('.section').scrollHeight,
  btnDawn: document.querySelector('.section-bottom__btn'),

  menu: document.querySelector('#menu'),
  sectBottom: document.querySelector('.section-bottom'),

  count: 1,


  start() {
    this.menuNaming()
    this.sectRightContent();
    this.btnDawn.addEventListener('click', () => {
      this.scrollDown()
    })
  },
  scrollDown() {
    this.sectWrap.style.transform = `translateY(-${this.count * this.step}px)`;
    this.count ++;
    this.changeDinamicContent()
  },

  changeDinamicContent() {
    this.fadeFixedEl();
    this.sectRightContent();
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
  sectRightContent() { // Нумеровка слайдов
    let activeSlide = document.querySelector('.section-right__active');
    let allSlide = document.querySelector('.section-right__all');
    activeSlide.innerHTML = ("0"+this.count).slice(-2);
    allSlide.innerHTML = ("- 0"+this.sectWrap.children.length);
  },

  
  menuNaming() { // Именование слайдов
    let content = { 
      menu: ['Добро пожаловать', 'Направления и классы', 'Пробное занятие', 'Преподаватели', 'Абонементы', 'Расписание', 'Отзывы', 'Пробное занятие', 'Контакты', 'Вернуться'],
    };
    let el = this.menu.querySelector('.menu-sectname');
    el.innerHTML = content.menu[this.count - 1];
    this.btnDawn.querySelector('span').innerHTML = content.menu[this.count];
  }
}

scroll.start()