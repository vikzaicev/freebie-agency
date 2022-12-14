/*=========animItems====================*/

const animItems = document.querySelectorAll('.amim-items');
if (animItems.length > 0) {
   window.addEventListener("scroll", animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         //*console.log(animItemPoint);
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         }
         else {
            if (!animItem.classList.contains('anim-no'))
               animItem.classList.remove('active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect();
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll()
   }, 400);
}

/*====================hamb==========================*/
const menu = document.querySelector('.menu__list');
const hamb = document.querySelector('.header__hamb');
const body = document.querySelector('body');
const popup = document.querySelector('.header__popup');

popup.append(menu.cloneNode(1));

hamb.addEventListener('click', hamburger);
// document.addEventListener('click', (event) => {
//   console.log(event.target);
//       })

function hamburger() {
   hamb.classList.toggle('active');
   popup.classList.toggle('open');
   body.classList.toggle('noscrol');
};

popup.querySelectorAll('.menu__link').forEach(link => {
   link.addEventListener('click', () => {
      hamb.classList.remove('active');
      popup.classList.remove('open');
      body.classList.remove('noscrol');
   })
})

/*===============scroll===================================*/
const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
   anchor.addEventListener('click', event => {
      event.preventDefault()

      const blokId = anchor.getAttribute('href').substring(1)

      document.getElementById(blokId).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
})

/*===============numbs===================================*/
const numbs = document.querySelectorAll('.header__numbr');
if (numbs.length > 0) {
   for (let index = 0; index < numbs.length; index++) {
      const numb = numbs[index];

      numb.addEventListener("click", numbActiv);

      function numbActiv() {

         numbs.forEach(element => {
            element.classList.remove('active')
         });
         numb.classList.add('active')
      }
   }
}
/*===============tab===================================*/
const items = document.querySelectorAll('.contact__item');
for (let index = 0; index < items.length; index++) {
   const item = items[index];

   item.addEventListener("click", numbActiv);

   function numbActiv() {
      items.forEach(element => {
         element.classList.remove('active')
      });
      item.classList.add('active')
   }
}
/*=================slider==================*/
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const slide = document.querySelectorAll('.slider__body')
const list = document.querySelector('.slider__list')
let currentIndex = 0

for (let index = 0; index < slide.length; index++) {
   const element = slide[index];
   element.setAttribute("id", `${index}`)
   slide[currentIndex].setAttribute("data-activ", "activ")
   slide[currentIndex].classList.remove('none')
}

nextBtn.addEventListener('click', function () { showNewSlide('next') })
prevBtn.addEventListener('click', function () { showNewSlide('prev') })
list.addEventListener('click', function () { showNewSlide('next') })

function showNewSlide(direction) {
   for (let index = 0; index < slide.length; index++) {
      const element = slide[index];
      if (element.dataset["activ"]) {
         currentIndex = +element.getAttribute('id')
      }
   }

   slide[currentIndex].classList.add('none')
   slide[currentIndex].removeAttribute("data-activ")

   if (direction == 'next') {
      currentIndex = currentIndex + 1 == slide.length ? 0 : currentIndex + 1
   }
   if (direction == 'prev') {
      currentIndex = currentIndex == 0 ? slide.length - 1 : currentIndex - 1
   }
   slide[currentIndex].setAttribute("data-activ", "activ")
   slide[currentIndex].classList.remove('none')
}

