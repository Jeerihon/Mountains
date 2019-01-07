(function () {

  let parallax = (function () {
    let bg = document.querySelector('.hero__bg');
    let bgText = document.querySelector('.hero__title');
    let user = document.querySelector('.hero__content');

    return {
      move: function (block, windowScroll, strafeAmount) {
        let strafe = windowScroll / -strafeAmount + '%';
        let style = block.style;
        let transformString = 'translate3d(0,' + strafe +', 0)'

        style.transform = transformString;
        style.webkitTransform = transformString;
      },

      init: function (wScroll) {
        this.move(bg, wScroll, 100);
        this.move(bgText, wScroll, 40);
        this.move(user, wScroll, 5);
      }
    }
  })();

  window.onscroll = function () {
    let wScroll = window.pageYOffset;

    parallax.init(wScroll);
  };
})();
