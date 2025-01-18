//mostrar menu mobile
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open')
    }
}


//slide
const slide = document.querySelectorAll('.slide');
const slideItem = document.querySelectorAll('.slide-item')
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlide() {
    slide.forEach(item => item.classList.remove('slide-on'));
    slideItem.forEach(item => item.classList.remove('slide-item-on'))
}

function showSlide() {
    slide[currentSlide].classList.add('slide-on');
    slideItem[currentSlide].classList.add('slide-item-on')
}

function nextSlide() {
    hideSlide();
    currentSlide = (currentSlide + 1) % slide.length; // Avança para o próximo slide
    showSlide();
}

function prevSlide() {
    hideSlide();
    currentSlide = (currentSlide - 1 + slide.length) % slide.length; // Volta para o slide anterior
    showSlide();
}

// Inicializa o primeiro slide
showSlide();

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

let autoSlideInterval = setInterval(() => {
    nextSlide();
}, 8000);

btnNext.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
});
btnPrev.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
});

//trocar de paginas
function redirectToIndex(){
    window.location.href = 'index.html'
}
function redirectToIndexProdutos(){
    window.location.href = 'index.html#nav-produto'
}
function redirectToIndexRifas(){
    window.location.href = 'index.html'
}
function redirectToProduct1(){
    window.location.href = 'product1.html'
}
function redirectToProduct2(){
    window.location.href = 'product2.html'
}
function redirectToProduct3(){
    window.location.href = 'product3.html'
}
//



