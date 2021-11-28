import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.createSlider();
    this.createSpan();
    this.dragAndDrop();
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

  dragAndDrop(){
    this.elem.querySelector('.slider__thumb').ondragstart = () => false;
    this.elem.addEventListener('pointerdown', () =>{

    this.elem.classList.add('slider_dragging');

      document.addEventListener('pointermove', this.onPointerMove);

      document.addEventListener('pointerup', () =>{
        this.elem.querySelector('.slider__thumb').classList.remove('slider_dragging');
        this.elem.dispatchEvent (new CustomEvent('slider-change', { 
          detail: this.value, 
          bubbles: true 
        }));

        document.removeEventListener('pointermove', this.onPointerMove)
      });

    });

  }


  onPointerMove = (event) =>{
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
      if (leftRelative < 0) {
        leftRelative = 0;
      }

      if (leftRelative > 1) {
        leftRelative = 1;
      }

    let leftPercents = leftRelative * 100;
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);

  this.elem.querySelector(".slider__value").innerHTML = value;
  this.value = +this.slider.querySelector(".slider__value").innerHTML;

    this.elem.dispatchEvent (new CustomEvent('slider-change', { 
      detail: this.value, 
      bubbles: true 
    }));
  }


  click(){
    this.slider.addEventListener("click", (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;
     /* this.slider.querySelector('.slider__thumb').style.left = `${valuePercents}%`;
      this.slider.querySelector('.slider__progress').style.width = `${valuePercents}%`;*/
      this.slider.querySelector(".slider__value").innerHTML = value;
      this.value = +this.slider.querySelector(".slider__value").innerHTML;
      

   this.slider.dispatchEvent (new CustomEvent('slider-change', { 
    detail: this.value, 
    bubbles: true 
  }));
    });
  }

    
}
