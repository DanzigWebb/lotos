let scroll = {
  sectWrap: document.querySelector('.section-wrap'),
  step: document.querySelector('.section').scrollHeight,
  btnDawn: document.querySelector('.section-bottom__btn'),

  menu: document.querySelector('#menu'),
  menuLinks: document.querySelectorAll('.menu__item'),
  sectBottom: document.querySelector('.section-bottom'),

  count: 1,


  start() {
    this.changeDinamicContent();
    this.btnDawn.addEventListener('click', () => {
      this.scrollBot()
    })
    this.menuControl()
    this.touchController()
    this.whellController()
  },
  scrollBot() {
    this.sectWrap.style.transform = `translateY(-${this.count * this.step}px)`;
    this.count ++;
    this.changeDinamicContent()
  },
  scrollTop() {
    this.sectWrap.style.transform = `translateY(-${this.count * this.step}px)`;
    this.count --;
    this.changeDinamicContent()
  },
  menuControl() {
    this.menuLinks.forEach((link, i) => {
      link.addEventListener('click', ()=> {
        this.count = i;
        this.scrollBot()
      })
    })
  },

  changeDinamicContent() {
    this.fadeFixedEl();
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
    activeSlide.innerHTML = ("0"+this.count).slice(-2);
    allSlide.innerHTML = ("- 0"+this.sectWrap.children.length);
  },
  menuNaming() { // Именование слайдов
    let content = { 
      menu: ['Добро пожаловать', 'Направления и классы', 'Пробное занятие', 'Преподаватели', 'Абонементы', 'Расписание', 'Отзывы', 'Акции', 'Контакты', 'Вернуться'],
    };
    let el = this.menu.querySelector('.menu-sectname');
    el.innerHTML = content.menu[this.count - 1];
    this.btnDawn.querySelector('span').innerHTML = content.menu[this.count];
  },
  // листенеры
	touchController() {
		let initialPoint;
		let finalPoint;
		document.addEventListener('touchstart', (event) => {
			initialPoint = event.changedTouches[0];
		}, false);
		document.addEventListener('touchend', (event) => {
			finalPoint = event.changedTouches[0];
			let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
			let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
			if (xAbs > 30 || yAbs > 30) {
				if (finalPoint.pageY < initialPoint.pageY) {
					/*СВАЙП ВВЕРХ*/
					this.scrollBot()
				}
				else {
					/*СВАЙП ВНИЗ*/
					this.scrollTop()
				}
			}
		}, false);
  },
  whellController() {
    window.addEventListener('wheel', (e) => {
			if (e.deltaY > 0 & this.fix) {
				this.scrollBot();
			}
			if (e.deltaY < 0 & this.fix) {
				this.scrollTop();
			}
		})
  }
}

scroll.start()
scroll.count = 2
scroll.scrollBot()