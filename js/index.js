
let events = ['click', 'auxclick', 'contextmenu', 'dblclick', 'mouseenter', 'mouseleave', 'mousedown', 'resize', 'drag', 'keydown'];


// killLinks
let navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(item => {
    item.addEventListener(events[0], (event) => {
        event.preventDefault();
        alert('navlinks have been broken');
    })
})


// click
let topImg = document.querySelector('.intro img');
    topImg.addEventListener(events[0], () => {
    topImg.setAttribute('src', "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ");
});


// auxClick
let body = document.querySelector('body');
    body.addEventListener(events[1], (event) => {
    body.style.backgroundColor = 'pink';
    event.stopPropagation();
});


// contextMenu
let introHead = document.querySelector('.intro h2');
    introHead.addEventListener(events[2], (event) => {
    introHead.textContent = 'あめんぼ　赤い　な';
    event.stopPropagation();
});


// dblClick
let introText = document.querySelector('.intro p');
    introText.addEventListener(events[3], (event) => {
    introText.textContent = 'あ　い　う　え　お  うき　もに　こえびも  およいでる';
    event.stopPropagation();
});


// mouseEnter, mouseLeave
let contentSection = document.querySelector('.content-section');
    contentSection.addEventListener(events[4], () => {
    contentSection.style.color = 'orange';
});
    contentSection.addEventListener(events[5], () => {
    contentSection.style.color = 'black';
});


// mouseDown
let imgContent = document.querySelector('.content-destination img');
    imgContent.addEventListener(events[6], () => {
    imgContent.setAttribute('src','https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ');
});


// resize
window.addEventListener(events[7], () => {
    alert('Stop! You\'ve violated the law!');
});


// drag
let footer = document.querySelector('footer');
    footer.addEventListener(events[8], () => {
    body.style.backgroundColor = 'white';
})


// keyDown
let html = document.querySelector('html');
    html.addEventListener(events[9], () => {
        html.textContent = 'null';
});


// stopPropagation

let contentPick = document.querySelector('.content-pick')
contentPick.addEventListener(events[1], (event) => {
    event.stopPropagation();
    contentPick.style.backgroundColor = 'yellow';
});




