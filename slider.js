window.onload = function () {
  const slider = new Slider({
    images: '.slider1 .slider-item',
    prevBtn: '.slider1 .options .prev-btn',
    nextBtn: '.slider1 .options .next-btn',
    auto: true,
  });
};

function hide(elem) {
  elem.classList.remove('show');
}

function show(elem) {
  elem.classList.add('show');
}

function Slider({
  images, prevBtn, nextBtn, auto = false,
}) {
  this.images = document.querySelectorAll(images);
  this.prevBtn = document.querySelector(prevBtn);
  this.nextBtn = document.querySelector(nextBtn);
  this.auto = auto;
  this.currentImg = 0;

  this.moveNext = function () {
    if (++this.currentImg >= this.images.length) { this.currentImg = 0; }
  };

  this.movePrev = function () {
    if (--this.currentImg < 0) { this.currentImg = this.images.length - 1; }
  };

  this.move = function (direction) {
    hide(this.images[this.currentImg]);
    if (direction === 'prev') { this.movePrev(); }
    if (direction === 'next') { this.moveNext(); }
    show(this.images[this.currentImg]);
  };

  this.prev = function () {
    this.move('prev');
  };

  this.next = function () {
    this.move('next');
  };

  this.prevBtn.onclick = () => { this.prev(); };
  this.nextBtn.onclick = () => { this.next(); };

  if (this.auto) {
    setInterval(() => {
      this.next();
    }, 2000);
  }
}
