// query button with unique id
// make the corresponding text appear 
// based on the hovering of each button

// each whole square
let w_square_one = document.getElementById('square_one');
let w_square_two = document.getElementById('square_two');
let w_square_three = document.getElementById('square_three');
let w_square_four = document.getElementById('square_four');

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


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// ONE
// to mouseover hover
square_one.addEventListener('mouseover', () => {
    // change the style of the words
    box_one.classList.add('appear');
    // change the box shadow
    w_square_one.classList.add('hover');
});

// to mouseout take mouse away
square_one.addEventListener('mouseout', () => {
    box_one.classList.remove('appear');
    w_square_one.classList.remove('hover');
});

// for phone touch 'pointerdown'
w_square_one.addEventListener('pointerdown', () => {
    // Make words appear
    box_one.classList.toggle('appear');
    // Make box expand
    w_square_one.classList.toggle('pressed');
    // Change box shadow
    w_square_one.classList.toggle('touch');
    // Close the others

    // BOX TWO
    // the box shadow
    w_square_two.classList.remove('touch');
    // the box expanded
    w_square_two.classList.remove('pressed');
    // the box text
    box_two.classList.remove('appear')

    // BOX THREE
    w_square_three.classList.remove('touch');
    w_square_three.classList.remove('pressed');
    box_three.classList.remove('appear');

    // BOX FOUR
    w_square_four.classList.remove('touch');
    w_square_four.classList.remove('pressed');
    box_four.classList.remove('appear');
});


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////
// TWO
// to mouseover hover
square_two.addEventListener('mouseover', () => {
    // change the style of the words
    box_two.classList.add('appear');
    // change the box shadow
    w_square_two.classList.add('hover');
});

// to mouseout take mouse away
square_two.addEventListener('mouseout', () => {
    box_two.classList.remove('appear');
    w_square_two.classList.remove('hover');
});

// for phone touch 'pointerdown'
w_square_two.addEventListener('pointerdown', () => {
    // Make words appear
    box_two.classList.toggle('appear');
    // Make box expand
    w_square_two.classList.toggle('pressed');
    // change the box shadow
    w_square_two.classList.toggle('touch');

    // BOX ONE
    // the box shadow
    w_square_one.classList.remove('touch');
    // the box expanded
    w_square_one.classList.remove('pressed');
    // the text dissapear
    box_one.classList.remove('appear');

    // BOX THREE
    w_square_three.classList.remove('touch');
    w_square_three.classList.remove('pressed');
    box_three.classList.remove('appear');

    // BOX FOUR
    w_square_four.classList.remove('touch');
    w_square_four.classList.remove('pressed');
    box_four.classList.remove('appear');
});

// Three
// to mouseover hover
square_three.addEventListener('mouseover', () => {
    // change the style of the words
    box_three.classList.add('appear');
    // change the box shadow
    w_square_three.classList.add('hover');
});

// to mouseout take mouse away
square_three.addEventListener('mouseout', () => {
    box_three.classList.remove('appear');
    w_square_three.classList.remove('hover');
});

// to click on phone 
w_square_three.addEventListener('pointerdown', () => {
    // Make words appear
    box_three.classList.toggle('appear');
    // Make box expand
    w_square_three.classList.toggle('pressed');
    // change the box shadow
    w_square_three.classList.toggle('touch');

    // BOX ONE
    // the box shadow
    w_square_one.classList.remove('touch');
    // the box expanded
    w_square_one.classList.remove('pressed');
    // the text dissapear
    box_one.classList.remove('appear');

    // BOX TWO
    w_square_two.classList.remove('touch');
    w_square_two.classList.remove('pressed');
    box_two.classList.remove('appear');

    // BOX FOUR
    w_square_four.classList.remove('touch');
    w_square_four.classList.remove('pressed');
    box_four.classList.remove('appear');
});

// Four
// to mouseover hover
square_four.addEventListener('mouseover', () => {
    // change the style of the words
    box_four.classList.add('appear');
    // change the box shadow
    w_square_four.classList.add('hover');
});

// to mouseout take mouse away
square_four.addEventListener('mouseout', () => {
    box_four.classList.remove('appear');
    w_square_four.classList.remove('hover');
});

// to click on phone 
w_square_four.addEventListener('pointerdown', () => {
    // Make words appear
    box_four.classList.toggle('appear');
    // Make box expand
    w_square_four.classList.toggle('pressed');
    // change the box shadow
    w_square_four.classList.toggle('touch');

    // BOX ONE
    // the box shadow
    w_square_one.classList.remove('touch');
    // the box expanded
    w_square_one.classList.remove('pressed');
    // the text dissapear
    box_one.classList.remove('appear');

    // BOX TWO
    w_square_two.classList.remove('touch');
    w_square_two.classList.remove('pressed');
    box_two.classList.remove('appear');

    // BOX THREE
    w_square_three.classList.remove('touch');
    w_square_three.classList.remove('pressed');
    box_three.classList.remove('appear');
});