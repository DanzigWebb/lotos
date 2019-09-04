let menu = new Vue({
  el: '#menu',
  data: {
    menuShow: false
  },
  methods: {
    openMenu() {
      this.menuShow = !this.menuShow
    }
  },
})