// alert('Hello');

// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    // 3rd step - Removing animation in
container.on('mouseleave', e => {
   card.style.transform = 'all 0.5s ease';
   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});
// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

});


/*My Explanation:

1. Element Selection: The variables card and container are set to select elements with the classes "card" and "container" using jQuery.

2. Animation on Mouse Movement: A function is triggered by the mousemove event on the container, which updates the card's rotation based on the mouse position.

3. Reverting Animation: When the mouse exits the container, the card returns to its original position.

4. Triggering Animation: Upon entering the container, the card's transformations are reset to 'none', and other elements are pushed out using translateZ(50px).

5. Selecting Specific Items: Other variables are set to select certain elements within the container using jQuery, which will be used for further transformations later on. */