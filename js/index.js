// Selectors
const funBusH1 = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const theBody = document.querySelector('body');
const theHTML = document.querySelector('html');
const img = document.querySelectorAll('img');
const buttons = document.querySelectorAll('.destination .btn');
const anchors = document.querySelectorAll('nav a');
const h2And4Tag = document.querySelectorAll('h2, h4');
const pTag = document.querySelectorAll('p');

funBusH1.addEventListener('mouseover', () => {
  funBusH1.style.fontSize = '5.7rem';
  setTimeout(() => {
    funBusH1.style.fontSize = '';
  }, 500);
}, false);

theBody.addEventListener('keydown', () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  const rbgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  theBody.style.background = rbgColor;
});

let scale = 1;
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('wheel', (eventZoom) => {
    eventZoom.preventDefault();
    scale += eventZoom.deltaY * -0.01;
// Restrict Scale
    scale = Math.min(Math.max(.125, scale), 4);
// Apply Scale Transform
    img[i].style.transform = `scale(${scale})`;
  });
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    // Background Color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const backColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    // Font Color
    let j = Math.floor(Math.random() * 256);
    let k = Math.floor(Math.random() * 256);
    let l = Math.floor(Math.random() * 256);
    const textColor = 'rgb(' + j + ',' + k + ',' + l + ')';
    buttons[i].style.background = backColor;
    buttons[i].style.color = textColor;
  });
};

theBody.addEventListener('load', () => {
  console.log('page is loaded');
});

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('focus', (lightgrayColor) => {
    lightgrayColor.target.style.background = 'lightgray';
  });
};

theHTML.addEventListener('resize', () => {
  console.log(`${window.innerHeight} + ${window.innerWidth}`)
});

h2And4Tag.forEach( h => {
  h.addEventListener('mousemove', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    const pColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    h.style.color = pColor;
  });
})


for (let i = 0; i < pTag.length; i++) {
  pTag[i].addEventListener('select', (highlight) => {
    document.getElementsByTagName("p")[i].setAttribute("class", "log");
    const log = document.getElementById('log');
    const selection = highlight.target.value.substring(highlight.target.selectionStart, highlight.target.selectionEnd);
    console.log(`${log.textContent = `${selection}`}`)
  });
};

// pTag.forEach(w => {
//   w.addEventListener('select', (highlight) => {
//     w.setAttribute("class", "log");
//     const log = document.getElementById('log');
//     const selection = highlight.target.value.substring(highlight.target.selectionStart, highlight.target.selectionEnd);
//     console.log(`${log.textContent = `${selection}`}`)
//   });
// });


for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('dblclick', () => {
    img[i].style.display = 'none';
  });
};


anchors.forEach(a => {
  a.addEventListener("click", stopReload => {
    stopReload.preventDefault();
  });
});

nav.addEventListener("mouseover", (stuff) => {
    stuff.stopPropagation();
  });


nav.addEventListener("mouseover", () => {
    nav.style.color = 'green';
  });
