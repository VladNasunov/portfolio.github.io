
        document.querySelector('.header__menuToggle').addEventListener('click', function(e){
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
        if(this.classList.contains('is-active')){
            this.classList.remove('is-active');
            document.querySelector('.header__menu').classList.remove('is-active');
        }
        else{
            this.classList.add('is-active');
            document.querySelector('.header__menu').classList.add('is-active');
        }
        })


$('.photo__slider').slick({
    dots: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    nextArrow: '<img class="photo__btn-right" src="img/arrow-right.png" alt=""> ',
    prevArrow: '<img class="photo__btn-left" src="img/arrow-left.png" alt="">',
  });
   
  
$(document).ready(function(){
    $('.books__items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<img class="books__btn-right" src="img/arrow-right.png" alt="">',
        prevArrow: '<img class="books__btn-left" src="img/arrow-left.png" alt=""> ',
        responsive: [
            {
              breakpoint: 600,
              settings: 'unslick'
            }
          ]
    });
   
  });

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
document.addEventListener('keydown', function(e){
    if(e.key ==  "Escape"){
        const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    }
})