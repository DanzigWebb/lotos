let menu = new Vue({
  el: '#menu',
  data: {
    menuShow: false,
  },
  methods: {
    openMenu() {
      this.menuShow = !this.menuShow
    }
  },
  updated() {
    let mainContent = document.querySelector('.main-content');
    let step = this.$refs.menuContent.scrollWidth;
    this.menuShow == true ? mainContent.style.left = step + 'px' : mainContent.style.left = `0`
    console.log()
  }
})

// menu.menuShow = true