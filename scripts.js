(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());




document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('accordion-item--active');

  })

);




const swiper1 = new Swiper('.first', {
  

  // If we need pagination
  pagination: {
    el: '.first-pagination',
  },

  navigation: {
    nextEl: '.first-button-next',
    prevEl: '.first-button-prev',
  },




});

const swiper2 = new Swiper('.last', {

  effect: "cards",
  grabCursor: true,


  pagination: {
    el: ".last-pagination-desktop",
    type: "fraction",
  },
  // Navigation arrows
  
  navigation: {
    nextEl: '.last-button-next',
    prevEl: '.last-button-prev',
  },

});


(function() {
var boxes = document.getElementsByClassName('last-slide');
var height = 0;
//Определяем максимальную высоту блока
for( var i = 0; i < boxes.length; i++ ){
    var current_height = boxes[i].offsetHeight;
    if(current_height > height) {
        height = current_height;
    }        
}
//Задаем максимальную высоту блока всем элементам
for( var i = 0; i < boxes.length; i++ ){
    boxes[i].style.height = height + 'px';       
}

}());