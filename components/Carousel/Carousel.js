class Carousel {
    constructor (carousel) {
        this.carousel = carousel;
        console.log(this.carousel);
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('.carousel img');
        console.log(this.images);
        this.index = 0;
        this.images[this.index].style.display = 'block';
        this.leftBtn.addEventListener('click', () => this.cycleLeft());
        this.rightBtn.addEventListener('click', () => this.cycleRight());
    }

    cycleLeft() {
        this.images[this.index].style.display = 'none';
        this.index === 0 ? this.index = this.images.length - 1 : this.index--;
        this.images[this.index].style.display = 'block';
    }

    cycleRight() {
        this.images[this.index].style.display = 'none';
        this.index === this.image.length + 1 ? this.index = 0 : this.index++;
        this.images[this.index].style.display = 'block';
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/