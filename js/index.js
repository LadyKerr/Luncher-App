//change color of nav links
const navLink = document.querySelectorAll('a');
navLink.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    link.style.color = 'red';
  });
  link.addEventListener('mouseout', (event) => {
    link.style.color = 'black';
  });
  link.preventDefault;
});

//style button
  const btn = document.querySelector('.btn');
  btn.addEventListener('mouseover', (event) => {
    btn.style.backgroundColor = 'white';
    btn.style.color = 'black';
    btn.style.border = '2px solid gray';
  });
  btn.addEventListener('mouseout', (event) => {
    btn.style.backgroundColor = '#fcbe03';
    btn.style.color = 'white';
    btn.style.border = '2px solid white';
  });

  