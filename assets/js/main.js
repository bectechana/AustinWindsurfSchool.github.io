/**
* Template Name: Delicious
* Template URL: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
function toggleMinorForm(isMinor) {
  const form = document.getElementById('minorConsentForm');
  if (isMinor) {
    form.classList.remove('hidden');
  } else {
    form.classList.add('hidden');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const classData = [
    {
        title: "May 5th 12:30-3:00 PM (SOLD OUT)",
        price: "$100.00",
        description: "Beginner single day class, all gear is provided.",
        filter: "filter-beginner"
    },
    {
      title: "May 11/12 12:30 PM - 3:00 PM",
      price: "$145.00",
      description: "Beginner 2 day class, all gear is provided.",
      filter: "filter-beginner"
    },
    {
      title: "May 11/12 3:30 PM - 6:00 PM",
      price: "$145.00",
      description: "Beginner 2 day class, all gear is provided.",
      filter: "filter-beginner"
    },
    {
      title: " May 11/12 3:30 PM - 6:00 PM",
      price: "$145.00",
      description: "Level 2 -Intermediate 2 day class, all gear is provided.",
      filter: "filter-intermediate"
    },
    {
      title: "June 1/2 9:00 AM - 11:30 AM",
      price: "$145.00",
      description: "Beginner 2 day class, all gear is provided, call us if you wondering on your skill level.",
      filter: "filter-beginner"
    },
    {
      title: "June 1/2 12:30 PM - 3:00 PM (SOLD OUT)",
      price: "$145.00",
      description: "Level 1 - Beginner 2 day class, all gear is provided.",
      filter: "filter-beginner"
  },
    {
      title: "June 1/2 3:30 PM - 6:00 PM",
      price: "$145.00",
      description: "Level 1 - Beginner 2 day class, all gear is provided",
      filter: "filter-beginner"
    },

    {
      title: "June 13/14 3:30 PM - 6:00 PM",
      price: "$145.00",
      description: "Level 2 - Intermediate 2 day class, all gear is provided.",
      filter: "filter-intermediate"
  },
    {
      title: "July 13/14 8:00 AM - 10:30 AM",
      price: "$145.00",
      description: "Level 1 - Beginner 2 day class, all gear is provided.",
      filter: "filter-beginner"
  },
    {
      title: "July 13/14 8:00 AM - 10:30 AM",
      price: "$145.00",
      description: "Level 2 - Intermediate 2 day class, all gear is provided.",
      filter: "filter-intermediate"
  },
    {
      title: "August 3/4 8:00 AM - 10:30 AM",
      price: "$145.00",
      description: "Level 1 - Beginner 2 day class, all gear is provided.",
      filter: "filter-beginner"
  },
    {
      title: "August 3/4 8:00 AM - 10:30 AM",
      price: "$145.00",
      description: "Level 2 - Intermediate 2 day class, all gear is provided.",
      filter: "filter-intermediate"
  },
    {
      title: "Private Lessons",
      price: "$100-$200",
      description: "Please call to setup a private lesson",
      filter: "filter-private"
  },


      // Add more classes as needed
  ];

  const classList = document.getElementById("class-list");

  classData.forEach(cls => {
      const item = document.createElement("div");
      item.className = `col-lg-6 menu-item ${cls.filter}`;
      item.innerHTML = `
          <div class="menu-content">
              <a href="">${cls.title}</a><span>${cls.price}</span>
          </div>
          <div class="menu-ingredients">
              ${cls.description}
          </div>
      `;
      classList.appendChild(item);
  });
});


function updateGuestFields() {
  const numPeople = document.getElementById("numPeople").value;
  const guestDetails = document.getElementById("guestDetails");

  guestDetails.innerHTML = ''; // Clear existing additional guest input fields

  for (let i = 1; i <= numPeople; i++) {
    guestDetails.innerHTML += `
    <div class="row">
    <div class="col-md-6 form-group">
        <label for="guestFirstName${i}"> <strong> Guest ${i} First Name</strong></label>
        <input type="text" name="g${i}-first" class="form-control" id="guestFirstName${i}" placeholder="Enter First Name" required>
      </div>
      <div class="col-md-6 form-group">
      <label for="guestLastName${i}"><strong> Guest ${i} Last Name</strong></label>
        <input type="text" name="g${i}-last" class="form-control" id="guestLastName${i}" placeholder="Enter Last Name" required>
      </div>
      </div>
      <div class="form-group">
        <label for="guestEmail${i}">Guest ${i} Email</label>
        <input type="email" name="g${i}-email" class="form-control" id="guestEmail${i}" placeholder="Enter Email" required>
      </div>
      <div class="row">
      <div class="col-md-6 form-group">
      <label for="guestEmail${i}">Guest ${i} Weight</label>
      <input type="text" name="g${i}-weight" class="form-control" id="guestWeight${i}" placeholder="Enter Weight in lbs" required>
    </div>
    <div class="col-md-6 form-group">
    <label for="guestAge${i}">Guest ${i} Age</label>
      <input type="text" name="g${i}-age" class="form-control" id="guestAge${i}" placeholder="Enter Age in years" required>
    </div>
    </div>
    `;
  }
}

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
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
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
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Menu isotope and filter
   */
  window.addEventListener('load', () => {
    let menuContainer = select('.menu-container');
    if (menuContainer) {
      let menuIsotope = new Isotope(menuContainer, {
        itemSelector: '.menu-item',
        layoutMode: 'fitRows'
      });

      let menuFilters = select('#menu-flters li', true);

      on('click', '#menu-flters li', function(e) {
        e.preventDefault();
        menuFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        menuIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.events-slider', {
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
   * Initiate gallery lightbox
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
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

})()