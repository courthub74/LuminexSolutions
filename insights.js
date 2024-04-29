// query button with unique id
// make the corresponding text appear 
// based on the hovering of each button

// each whole square
let w_square_one = document.getElementById('square_one');

// let underline_one = document.querySelector('.insight_button');

// each square button
let square_one = document.getElementById('button_one');
let square_two = document.getElementById('button_two');
let square_three = document.getElementById('button_three');
let square_four = document.getElementById('button_four');

// each paragraph
let box_one = document.getElementById('box_one_words');
let box_two = document.getElementById('box_two_words');
let box_three = document.getElementById('box_three_words');
let box_four = document.getElementById('box_four_words');

// add event listener to the button

// One
// to mouseover hover
square_one.addEventListener('mouseover', () => {
    // change the style of the words
    box_one.classList.add('appear');
});

// to mouseout take mouse away
square_one.addEventListener('mouseout', () => {
    box_one.classList.remove('appear');
});

// for phone touch 'pointerdown'
w_square_one.addEventListener('pointerdown', () => {
    // Make words appear
    box_one.classList.toggle('appear');
    // Make box expand
    w_square_one.classList.toggle('pressed');
});

close_square_one.addEventListener('pointerdown', () => {
    // Make words appear
    box_one.classList.remove('appear');
    // Make box expand
    w_square_one.classList.remove('pressed');
    // Make Line appear

});

// Two
// to mouseover hover
square_two.addEventListener('mouseover', () => {
    // change the style of the words
    box_two.classList.add('appear');
});

// to mouseout take mouse away
square_two.addEventListener('mouseout', () => {
    box_two.classList.remove('appear');
});

// Three
// to mouseover hover
square_three.addEventListener('mouseover', () => {
    // change the style of the words
    box_three.classList.add('appear');
});

// to mouseout take mouse away
square_three.addEventListener('mouseout', () => {
    box_three.classList.remove('appear');
});

// Four
// to mouseover hover
square_four.addEventListener('mouseover', () => {
    // change the style of the words
    box_four.classList.add('appear');
});

// to mouseout take mouse away
button_four.addEventListener('mouseout', () => {
    box_four.classList.remove('appear');
});