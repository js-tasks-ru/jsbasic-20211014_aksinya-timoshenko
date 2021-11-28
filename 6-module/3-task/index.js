import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
    constructor(slides) {
      this.slides = slides;
      this.carousel = createElement("<div class='carousel'><div class='carousel__inner'></div></div>");
      this.createCarousel(this.slides);
      this.createButton();
      this.initCarousel();
    }
    
    get elem(){
      return this.carousel;
    }
    
    createCarousel(slides){
      for(let slid of slides){
        let val = createElement('<div class="carousel__slide" data-id="penang-shrimp">\
        <img src="/assets/images/carousel/' + slid.image + '" class="carousel__img" alt="slide">\
        <div class="carousel__caption">\
        <span class="carousel__price">€' + slid.price.toFixed(2) + '</span>\
        <div class="carousel__title">' + slid.name + '</div>\
        <button type="button" class="carousel__button">\
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">\
        </button>\
        </div>\
        </div>');

        val.querySelector('.carousel__button').addEventListener("click", () => {
          this.carousel.dispatchEvent(new CustomEvent("product-add", { // имя события должно быть именно "product-add"
            detail: slid.id,  // Уникальный идентификатора товара из объекта товара
            bubbles: true // это событие всплывает - это понадобится в дальнейшем
          }))
        });
        

        this.carousel.querySelector('.carousel__inner').appendChild(val);
      }
  }

  
  createButton(){
    let button = '<div class="carousel__arrow carousel__arrow_right">\
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">\
    </div>\
    <div class="carousel__arrow carousel__arrow_left">\
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">\
    </div>';

   this.carousel.insertAdjacentHTML("afterbegin", button);
    }

    initCarousel() {
      let index = 0; //счетчик для доступа к конкретному слайду
        let max = this.carousel.querySelectorAll('.carousel__slide').length - 1; //максимальное количество слайдов, чтобы сладер не мог прокручиваться дальше, когда достигнет последней кртинки
        let rightBtn = this.carousel.querySelector('.carousel__arrow_right');
        let leftBtn = this.carousel.querySelector('.carousel__arrow_left');
        let carousel = this.carousel.querySelector('.carousel__inner'); //сама карусель, в которой находятся все картинки
        leftBtn.style.display = 'none';

        this.carousel.addEventListener("click", (event) => {
          if (event.target.closest('.carousel__arrow_left')){
              index = Math.max(--index, 0);
              leftBtn.style.display = index == 0 ? 'none' : '';
              rightBtn.style.display = '';
              let width = this.carousel.querySelector('.carousel__inner').offsetWidth;
              carousel.style.transform = `translateX(${-width*(index)}px)`;
          }
          else if(event.target.closest('.carousel__arrow_right')){
            index = Math.min(++index, max); //находим индекс, если ++index дает нам число, большее чем максимальное количество слайдом, то за индек берем max, иначе index
            rightBtn.style.display = index == max ? 'none' : '';
            leftBtn.style.display = '';
            let width = this.carousel.querySelector('.carousel__inner').offsetWidth;
            carousel.style.transform = `translateX(${-width*(index)}px)`;
          }
        });
      }
    }