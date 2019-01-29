// Your code goes here
const logoHeader = document.querySelector('.logo-heading');
const bodyAll = document.querySelector('body');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const html = document.querySelector('html');
const homeLink = document.querySelector('#home');
const aboutLink = document.querySelector('#about');
const blogLink = document.querySelector('#blog');
const contactLink = document.querySelector('#contact');

logoHeader.addEventListener('mouseover', e => {
    logoHeader.style.color = '#17A2B8';
  });
  logoHeader.addEventListener('mouseout', e => {
      logoHeader.style.color = 'black';
  });
bodyAll.addEventListener('keydown', e => {
    bodyAll.style.color = 'purple';
    bodyAll.style.backgroundColor = 'lightgrey';
    logoHeader.style.color = 'lightblue';
});
bodyAll.addEventListener('keyup', e => {
    bodyAll.style.color = 'black';
    bodyAll.style.backgroundColor = 'white';
    logoHeader.style.color = 'black';
});
btn1.addEventListener('click', e => {
    alert('You successfully signed up for Fun In The Sun!');
});
btn2.addEventListener('dblclick', e => {
    alert('You double clicked this button and signed up for Mountain Excursion twice!');
    e.stopPropagation();
});
btn3.addEventListener('dragstart', e => {
    alert('Why are you dragging me?  I was comfortable where I was!');
});
html.addEventListener('copy', e => {
    alert("Copycat!");
});
homeLink.addEventListener('mouseenter', e => {
    homeLink.style.color = 'orange';
    e.preventDefault();
})
homeLink.addEventListener('mouseleave', e => {
    alert("You've added color to the Home page link! Try the other links!");
});
aboutLink.addEventListener('mouseenter', e => {
    aboutLink.style.color = 'lightgreen',
    e.preventDefault;
});
blogLink.addEventListener('mouseenter', e => {
    blogLink.style.color = 'lightblue';
    e.preventDefault;
});
contactLink.addEventListener('mouseenter', e => {
    contactLink.style.color = 'orchid';
});
html.addEventListener('dblclick', e => {
    alert('You double clicked on the page');
});

//Stretch
TweenMax.to('.logo-heading', 2, {x:'210%', rotation: 360});
TweenMax.to('#pic1', 2, {rotation: 900});
TweenMax.to('#pic2', 2, {rotation: 720});
TweenMax.to('#pic3', 2, {rotation: 360});