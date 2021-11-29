import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.createSlider();
    this.createSpan();
    this.click();
  }

  get elem(){
    return this.slider;
  }

  createSlider(){
    this.slider = createElement('<div class="slider">\
    <div class="slider__thumb">\
      <span class="slider__value">'+this.value+'</span>\
    </div>\
    <div class="slider__progress"></div>\
    <div class="slider__steps"></div>\
    </div>');
    this.createSpan();
  }

  createSpan(){
    let span = this.slider.querySelector('.slider__steps');
    let sliders = [];
    for (let i = 0; i < this.steps; i++){
      if(i == 0){
        sliders.push('<span class="slider__step-active"></span>');
      } else{
        sliders.push('<span></span>');
      }
    }
    span.innerHTML = [...sliders].join("");
  };

  click(){
    this.slider.addEventListener("click", (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      this.slider.querySelector('.slider__thumb').style.left = `${valuePercents}%`;
      this.slider.querySelector('.slider__progress').style.width = `${valuePercents}%`;
      this.slider.querySelector(".slider__value").innerHTML = value;
      this.value = +this.slider.querySelector(".slider__value").innerHTML;
      

   this.slider.dispatchEvent (new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
    detail: this.value, // значение 0, 1, 2, 3, 4
    bubbles: true // событие всплывает - это понадобится в дальнейшем
  }));
    });
  }

    
}
