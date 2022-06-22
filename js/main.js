const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })
}

navBtn.addEventListener('click', handleNav)

// FOR GALLERY SCRIPT 

$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    const selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});
$(document).ready(function() {
const popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
    enabled : true
}
});
});

// ////

const $ = selector => {
    return document.querySelector(selector);
  };
  
  function next() {
    if ($(".hide")) {
      $(".hide").remove(); 
    }
  
    /* Step */
  
    if ($(".prev")) {
      $(".prev").classList.add("hide");
      $(".prev").classList.remove("prev");
    }
  
    $(".act").classList.add("prev");
    $(".act").classList.remove("act");
  
    $(".next").classList.add("act");
    $(".next").classList.remove("next");
  
    /* New Next */
  
    $(".new-next").classList.remove("new-next");
  
    const addedEl = document.createElement('li');
  
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next","new-next");
  }
  
  function prev() {
    $(".new-next").remove();
      
    /* Step */
  
    $(".next").classList.add("new-next");
  
    $(".act").classList.add("next");
    $(".act").classList.remove("act");
  
    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");
  
    /* New Prev */
  
    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");
  
    const addedEl = document.createElement('li');
  
    $(".list").insertBefore(addedEl, $(".list").firstChild);
    addedEl.classList.add("hide");
  }
  
  slide = element => {
    /* Next slide */
    
    if (element.classList.contains('next')) {
      next();
      
    /* Previous slide */
      
    } else if (element.classList.contains('prev')) {
      prev();
    }
  }
  
  const slider = $(".list"),
        swipe = new Hammer($(".swipe"));
  
  slider.onclick = event => {
    slide(event.target);
  }
  
  swipe.on("swipeleft", (ev) => {
    next();
  });
  
  swipe.on("swiperight", (ev) => {
    prev();
  });