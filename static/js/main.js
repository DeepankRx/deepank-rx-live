/**
* Template Name: DevFolio - v4.3.0
* Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

})()

function successmsg(){
  let name  = document.getElementById('name').value;
let  subject = document.getElementById('subject').value;
let  message = document.getElementById('message').value;

  let  email = document.getElementById('email').value;
  console.log(name,subject,email,message);
  if(name.length > 0 && subject.length >0 && message.length >0 && email.length>0){
  alert("Message Sent Successfully!!!");
  }
}

let on1 = document.getElementById('bc');
on1.addEventListener('click',function(){
  let rd = document.getElementById('bb');
  function getRandom10() {
    let rand1 = Math.floor((Math.random() * 25) + 1)*10;
    return rand1;
  }
  let count_x_color=getRandom10();
  let count_y_color=getRandom10();
  let count_z_color=getRandom10();
console.log(count_z_color,count_y_color,count_x_color);
  
  rd.style.color=`rgb(${count_x_color},${count_y_color},${count_z_color})`
})
let on2 = document.getElementById('bc1');
on2.addEventListener('click',function(){
  let rd = document.getElementById('bb1');
  function getRandom10() {
    let rand1 = Math.floor((Math.random() * 25) + 1)*10;
    return rand1;
  }
  let count_x_color=getRandom10();
  let count_y_color=getRandom10();
  let count_z_color=getRandom10();
console.log(count_z_color,count_y_color,count_x_color);
  
  rd.style.color=`rgb(${count_x_color},${count_y_color},${count_z_color})`
})
let on3 = document.getElementById('bc2');
on3.addEventListener('click',function(){
  let rd = document.getElementById('bb2');
  function getRandom10() {
    let rand1 = Math.floor((Math.random() * 25) + 1)*10;
    return rand1;
  }
  let count_x_color=getRandom10();
  let count_y_color=getRandom10();
  let count_z_color=getRandom10();
console.log(count_z_color,count_y_color,count_x_color);
  
  rd.style.color=`rgb(${count_x_color},${count_y_color},${count_z_color})`
})
let on4 = document.getElementById('bc3');
on4.addEventListener('click',function(){
  let rd = document.getElementById('bb3');
  function getRandom10() {
    let rand1 = Math.floor((Math.random() * 25) + 1)*10;
    return rand1;
  }
  let count_x_color=getRandom10();
  let count_y_color=getRandom10();
  let count_z_color=getRandom10();
console.log(count_z_color,count_y_color,count_x_color);
  
  rd.style.color=`rgb(${count_x_color},${count_y_color},${count_z_color})`
})
let on5 = document.getElementById('bc4');
on5.addEventListener('click',function(){
  let rd = document.getElementById('bb4');
  function getRandom10() {
    let rand1 = Math.floor((Math.random() * 25) + 1)*10;
    return rand1;
  }
  let count_x_color=getRandom10();
  let count_y_color=getRandom10();
  let count_z_color=getRandom10();
console.log(count_z_color,count_y_color,count_x_color);
  
  rd.style.color=`rgb(${count_x_color},${count_y_color},${count_z_color})`
})
let on6 = document.getElementById('bc5');
on6.addEventListener('click',function(){
  let rd = document.getElementById('bb5');
  function getRandom10() {
    let rand1 = Math.floor((Math.random() * 25) + 1)*10;
    return rand1;
  }
  let count_x_color=getRandom10();
  let count_y_color=getRandom10();
  let count_z_color=getRandom10();
console.log(count_z_color,count_y_color,count_x_color);
  
  rd.style.color=`rgb(${count_x_color},${count_y_color},${count_z_color})`
})

function login_page(){
  let a = window.location.href;
  window.location.href = `${a}login`
}