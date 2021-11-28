import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.menu = createElement("<div class='ribbon'><nav class='ribbon__inner'></nav></div>");
    this.createMenu(categories);
    this.leftButton();
    this.rightButton();
    this.click();
    this.scroll();
  }

  get elem(){
    return this.menu;
  }

  createMenu(categories){
    for(let cate of categories){
      let menuelem = createElement('<a href="#" class="ribbon__item" data-id="'+cate.id+'">'+cate.name+'</a>');

      this.menu.querySelector('.ribbon__inner').appendChild(menuelem);

  }
}

leftButton(){
  let lbutton = '<button class="ribbon__arrow ribbon__arrow_left">\
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">\
</button>';

 this.menu.insertAdjacentHTML("afterBegin", lbutton);
  }

  rightButton(){
    let rbutton = '<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">\
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">\
  </button>';
  this.menu.insertAdjacentHTML("beforeEnd", rbutton);
    }

    click(){
      this.menu.addEventListener("click", (event) => {
      if (event.target.closest('.ribbon__arrow_right')){
        event.currentTarget.querySelector('.ribbon__inner').scrollBy(350, 0); 
      }
      else if(event.target.closest('.ribbon__arrow_left')){
        event.currentTarget.querySelector('.ribbon__inner').scrollBy(-350, 0);
      }
      else if (event.target.closest('.ribbon__item')){
        event.preventDefault();
        if(event.currentTarget.querySelector('.ribbon__item_active')){
          event.currentTarget.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
        }
        event.target.classList.add('ribbon__item_active');
        
        this.menu.dispatchEvent(new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
          detail: event.target.dataset.id, // уникальный идентификатора категории из её объекта
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        }));
      }
     });
    }
    
    scroll(){
      this.menu.querySelector('.ribbon__inner').addEventListener("scroll", (event) => {
       // console.log(event.target.scrollLeft);
       if(event.target.scrollLeft == 0){
          event.target.previousElementSibling.classList.remove('ribbon__arrow_visible');
          event.target.nextElementSibling.classList.add('ribbon__arrow_visible');
       }
       else if(event.target.scrollWidth - event.target.scrollLeft - event.target.clientWidth < 1){
        event.target.previousElementSibling.classList.add('ribbon__arrow_visible');
        event.target.nextElementSibling.classList.remove('ribbon__arrow_visible');
       }
       else{
          event.target.nextElementSibling.classList.add('ribbon__arrow_visible');
          event.target.previousElementSibling.classList.add('ribbon__arrow_visible');
       }
       });

    }

}
