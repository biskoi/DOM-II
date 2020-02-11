
let events = ['click', 'auxclick', 'contextmenu', 'dblclick', 'mouseenter', 'mouseleave', 'load', 'resize', 'scroll', 'keydown'];

let topImg = document.querySelector('.intro img');
    topImg.addEventListener(events[0], () => {
    topImg.setAttribute('src', "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ");
});

let body = document.querySelector('body');
    body.addEventListener(events[1], () => {
    body.style.backgroundColor = 'pink';
});

let introHead = document.querySelector('.intro h2');
    introHead.addEventListener(events[2], (event) => {
    introHead.textContent = 'あめんぼ　赤い　な';
    event.stopPropagation();
});

let introText = document.querySelector('.intro p');
    introText.addEventListener(events[3], (event) => {
    introText.textContent = 'あ　い　う　え　お  うき　もに　こえびも  およいでる';
    event.stopPropagation();
});

let contentSection = document.querySelector('.content-section');
    contentSection.addEventListener(events[4], () => {
    contentSection.style.color = 'orange';
});
    contentSection.addEventListener(events[5], () => {
    contentSection.style.color = 'black';
});

let imgContent = document.querySelector('.img-content img');
    imgContent.addEventListener(events[6], () => {
    imgContent.src = '';
    })

