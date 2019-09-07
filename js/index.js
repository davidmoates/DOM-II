// Selectors
const funBusH1 = document.querySelector('.logo-heading');
const theBody = document.querySelector('body');
const img = document.querySelectorAll('img');

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
