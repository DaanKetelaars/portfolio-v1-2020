// get darkmode class
const darkToggle = document.querySelector('.change_mode');

// set event on click, add class to body
darkToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark_mode');
});

// always updated year in copyright
window.addEventListener('load', () => {
  document.querySelector('#year').appendChild(
    document.createTextNode(new Date().getFullYear())
  );
});


// fadein elements when scrolled in viewport
let fadeInElements = document.querySelectorAll(".fade-element");
window.addEventListener('scroll', fadeIn);

function fadeIn() {
  for (let i = 0; i < fadeInElements.length; i++) {
    const elem = fadeInElements[i]
    const distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();


if (screen.width < 800) {
  // uit met de buis
} else {
  // get case items to hover over
  // get empty img tag
  const caseItems = document.querySelectorAll('.case-item');
  const image = document.querySelector('img');

  // iterate on all case items with forEach
  caseItems.forEach((element) => {
    // when mouse enters case item, add image to empty img tag
    element.addEventListener('mouseenter', (event) => {
      imgData = event.target.getAttribute('data-image')
      event.target.style.zIndex = 99
      image.setAttribute('src', imgData)
      image.style.opacity = 1
    })

    // set mouse position on mouse move
    element.addEventListener('mousemove', (event) => {
      const x = event.clientX - 100;
      const y = event.clientY - 200;
      image.style.right = x + 'px';
      image.style.top = y + 'px';
    })

    // clear everything
    element.addEventListener('mouseleave', (event) => {
      event.target.style.zIndex = 1
      image.setAttribute('src', '')
      image.style.opacity = 0
    })
  });
}