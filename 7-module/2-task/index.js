import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.createModal();
    //this.eventKeydown();
  }

  createModal(){
    this.modal = createElement('<div class="modal">\
    <div class="modal__overlay"></div>\
    <div class="modal__inner">\
      <div class="modal__header">\
        <button type="button" class="modal__close">\
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />\
        </button>\
       <h3 class="modal__title"></h3>\
      </div>\
      <div class="modal__body"></div>\
    </div>\
  </div>');

   this.modal.querySelector('.modal__close').addEventListener("click", () => {
      this.close();
   });


  }

  eventKeydown(){
    this._keydown = (event) => {
      if(event.code === 'Escape'){
        this.close();
      }
  };
    document.addEventListener("keydown", this._keydown);

  }

  setTitle(text){
    this.modal.querySelector('.modal__title').append(text);
  }

  setBody(elem){
    this.modal.querySelector('.modal__body').innerHTML = '';
    this.modal.querySelector('.modal__body').append(elem);

  }

  open(){
    document.querySelector('body').classList.add('is-modal-open');
    document.querySelector('body').appendChild(this.modal);
    this.eventKeydown();
  }
  close(){
    console.log(111);
    document.querySelector('body').classList.remove('is-modal-open');
    this.modal.remove();

    document.removeEventListener('keydown', this._keydown);
  }

}
