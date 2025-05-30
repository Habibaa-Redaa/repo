let next = document.querySelector('.next-solution');
let prev = document.querySelector('.prev-solution');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item-solution');
    document.querySelector('.slide-solution').appendChild(items[0]);
})

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item-solution');
    document.querySelector('.slide-solution').prepend(items[items.length - 1]);
})



function changeLanguage() {
  const lang = document.getElementById("language").value;
  const elements = document.querySelectorAll('[data-' + lang + ']');
  elements.forEach(el => {
      el.innerText = el.getAttribute('data-' + lang);
  });
}
let index = 0;
const totalSlides = 8; 
const slider = document.getElementById("slider");

function showSlide() {
  slider.style.transform = `translateX(${-index * (100 / totalSlides)}%)`;
  slider.style.transition = "transform 0.6s ease-in-out";
}
function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide();
}
function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
}
setInterval(nextSlide, 5000);
function changeLanguage() {
  let lang = document.getElementById("language").value;
  document.querySelectorAll("[data-en]").forEach(element => {
      element.innerText = element.getAttribute(`data-${lang}`);
  });
}
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
menu.classList.toggle("show");
});


function changeLanguage() {
  const lang = document.getElementById('language').value;
  alert("Language changed to: " + lang);
}
function openDropdown(event, sectionId) {
  event.preventDefault();
  document.getElementById("dropdown-panel").classList.add("active");

  const dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.innerHTML = `<h2>${sectionId} content goes here</h2><p>This section will show dynamic content related to "${sectionId}".</p>`;
}

function closeDropdown() {
  document.getElementById("dropdown-panel").classList.remove("active");
}

function openDropdown(event, section) {
  event.preventDefault();

  // Capitalize first letter to match the HTML IDs
  const capitalizedSection = section.charAt(0).toUpperCase() + section.slice(1);
  const targetId = 'dropdown-' + capitalizedSection;

  // Hide all dropdown contents
  const dropdownContents = document.querySelectorAll('.dropdown-content');
  dropdownContents.forEach(content => content.classList.remove('active'));

  // Show the target content
  const targetContent = document.getElementById(targetId);
  if (targetContent) {
    targetContent.classList.add('active');
    document.getElementById('dropdown-panel').classList.add('active');
  }
}

// Close dropdown
document.querySelector('.dropdown-close').addEventListener('click', () => {
  document.getElementById('dropdown-panel').classList.remove('active');
  const dropdownContents = document.querySelectorAll('.dropdown-content');
  dropdownContents.forEach(content => content.classList.remove('active'));
});

function toggleMobileMenu() {
  const navLeft = document.querySelector('.nav-left');
  const navRight = document.querySelector('.nav-right');

  navLeft.classList.toggle('active');
  navRight.classList.toggle('active');
}

const dropdownPanel = document.getElementById("dropdown-panel");

document.querySelectorAll(".nav-link").forEach(link => {
link.addEventListener("click", function (e) {
  e.preventDefault();
  dropdownPanel.classList.add("active");
});
});

// إغلاق القائمة عند الضغط على X
document.querySelector(".dropdown-close").addEventListener("click", function () {
dropdownPanel.classList.remove("active");
});

const hamburgerBtn = document.querySelector('.primary-navigation__trigger');

hamburgerBtn.addEventListener('click', () => {
document.body.classList.toggle('hide-scrollbar');
});

const hamburgerButton = document.querySelector('.primary-navigation__trigger'); // غيّر الاسم إذا لزم الأمر
const header = document.querySelector('.header__main, .header--expanded');

hamburgerButton.addEventListener('click', () => {
  if (header.classList.contains('header__main')) {
    header.classList.remove('header__main');
    header.classList.add('header--expanded');
  } else {
    header.classList.add('header--expanded');
    header.classList.add('header__main');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-primary-dropdown');
  const navMenu = document.querySelector('.primary-navigation ul');

  toggleButton.addEventListener('click', function () {
      navMenu.classList.toggle('open');
  });

  // دعم فتح/إغلاق باستخدام زر Enter عند التركيز على العنصر
  toggleButton.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navMenu.classList.toggle('open');
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const toggleMenu = document.getElementById('.primary-navigation__trigger');
  const closeMenu = document.getElementById('close-menu');
  const nav = document.getElementById('main-menu');

  toggleMenu.addEventListener('click', () => {
    nav.style.display = 'flex';
    document.body.classList.add('hide-scrollbar');
  });

  closeMenu.addEventListener('click', () => {
    nav.style.display = 'none';
    document.body.classList.remove('hide-scrollbar');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle-primary-dropdown");
  const menu = document.querySelector(".primary-navigation ul");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("open");
  });
});
const navLinks = document.querySelectorAll('.primary-navigation__item a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 767.98) {
      header.classList.remove('header--expanded');
    }
  });
});

// -------------solution-----------------------

// let next = document.querySelector('.next-solution');
// let prev = document.querySelector('.prev-solution');

// next.addEventListener('click', function() {
//     let items = document.querySelectorAll('.item-solution');
//     document.querySelector('.slide-solution').appendChild(items[0]);
// })

// prev.addEventListener('click', function() {
//     let items = document.querySelectorAll('.item-solution');
//     document.querySelector('.slide-solution').prepend(items[items.length - 1]);
// })
