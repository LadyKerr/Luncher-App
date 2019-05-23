// =====COMPONENTS SECTION======

class CarouselSlide {
  constructor(slideElement) {
    this.slide = slideElement;
    //get images
    this.img = this.slide.querySelectorAll('.slide');
    //get buttons
    this.prev = this.slide.querySelector('.left-btn');
    this.next = this.slide.querySelector('.right-btn');
    // add click listeners to buttons
    this.prev.addEventListener('click', () => this.left());
    this.next.addEventListener('click', () => this.right());
    //curent index
    this.index = 0;
    //display images as flex initially
    this.img[this.index].style.display ='flex';
  }
  //previous image method
  left() {
    this.img[this.index].style.display ='none';
      this.index--;
    if (this.index < 0) {
      this.index = this.img.length - 1;
    }
    this.img[this.index].style.display ='flex';
  }
  //next image method
  right() {
    this.img[this.index].style.display ='none';
      this.index++;
    if (this.index >= this.img.length) {
      this.index = 0;
    }
    this.img[this.index].style.display ='flex';
  }
}

let slide = document.querySelector('.carousel');
let myCarousel = new CarouselSlide(slide);