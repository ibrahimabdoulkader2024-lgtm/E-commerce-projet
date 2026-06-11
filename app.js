const searchContainer = document.querySelector('.search-container');
const btnSearch = document.querySelector('#search-icon');
const cartContainer = document.querySelector('.cart-container');
const btnCard = document.querySelector('#cart-icon');
const userBtn = document.querySelector('#user-icon');
const userContainer = document.querySelector('.user-container');
const nav = document.querySelector('.navigation');
const burgerBtn = document.querySelector('#burger-menu');
const linkNav = document.querySelectorAll('.navigation a');
const header = document.querySelector('nav');
const sections = document.querySelectorAll('section');



burgerBtn.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    burgerBtn.classList.toggle('bx-x');
    cartContainer.classList.remove('active');
    userContainer.classList.remove('active');
    searchContainer.classList.remove('active');
});

btnSearch.addEventListener('click', () => {
searchContainer.classList.toggle('active');
cartContainer.classList.remove('active');
userContainer.classList.remove('active');
nav.classList.remove('active');
 burgerBtn.classList.toggle('bx-x');
});


btnCard.addEventListener('click', ()=>{
    cartContainer.classList.toggle('active');
    searchContainer.classList.remove('active');
    userContainer.classList.remove('active');
    nav.classList.remove('active');
    burgerBtn.classList.toggle('bx-x');
})

userBtn.addEventListener('click', ()=>{
    userContainer.classList.toggle('active');
    searchContainer.classList.remove('active');
    cartContainer.classList.remove('active');
    nav.classList.remove('active');
    burgerBtn.classList.toggle('bx-x');
});


linkNav.forEach(link => {
    link.addEventListener('click', ()=>{
        nav.classList.remove('active');
        burgerBtn.classList.remove('bx-x');
    });
});
window.addEventListener('scroll', ()=>{
    header.classList.toggle('active', window.scrollY > 0)
});

window.addEventListener('scroll', ()=>{
    userContainer.classList.remove('active');
    searchContainer.classList.remove('active');
    cartContainer.classList.remove('active');
    nav.classList.remove('active');
    burgerBtn.classList.remove('bx-x');
});

const scrollActive = ()=>{
    sections.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop -150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top>=offset && top<offset+height){
            linkNav.forEach(links =>{
                links.classList.remove('active');
                document.querySelector(`.navigation a[href="#${id}"]`).classList.add('active');
            })
        }
    });
}

window.addEventListener('scroll', scrollActive);

var swiper = new Swiper(".news-cont", {
      spaceBetween: 20,
      loop:true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        568:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 2,
        },
        1020:{
            slidesPerView: 3,
        },
      },
    });


