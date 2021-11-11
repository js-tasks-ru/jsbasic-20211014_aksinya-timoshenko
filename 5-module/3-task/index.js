function initCarousel() {
  let index = 0; //счетчик для доступа к конкретному слайду
    let max = document.querySelectorAll('.carousel__slide').length - 1; //максимальное количество слайдов, чтобы сладер не мог прокручиваться дальше, когда достигнет последней кртинки
    let rightBtn = document.querySelector('.carousel__arrow_right');
    let leftBtn = document.querySelector('.carousel__arrow_left');
    let carousel = document.querySelector('.carousel__inner'); //сама карусель, в которой находятся все картинки
    let width = carousel.offsetWidth;
    
    leftBtn.style.display = 'none';
    rightBtn.addEventListener("click", function(){
    index = Math.min(++index, max); //находим индекс, если ++index дает нам число, большее чем максимальное количество слайдом, то за индек берем max, иначе index
    rightBtn.style.display = index == max ? 'none' : '';
    leftBtn.style.display = '';
    carousel.style.transform = `translateX(${-width*(index)}px)`;
    });
    
    leftBtn.addEventListener("click", function(){
    index = Math.max(--index, 0);
    leftBtn.style.display = index == 0 ? 'none' : '';
    rightBtn.style.display = '';
    carousel.style.transform = `translateX(${-width*(index)}px)`;
    });
    }
