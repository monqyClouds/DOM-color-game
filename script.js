// DOMSTRINGS
const resetBtn = document.querySelector('.btn__reset');
const easyBtn = document.querySelector('.btn__easy');
const hardBtn = document.querySelector('.btn__hard');
const masterBtn = document.querySelector('.btn__master');
const colorQue = document.querySelector('.color');
const result = document.querySelector('.result');
const colorNum = document.querySelector('.color');
const rule = document.querySelector('.instruction');
const boxes = document.querySelector('.boxes');

// Global Variables
var easy, hard, master;


///////////////////////////
// Initial game environment
///////////////////////////

const resetDifficulty = () => {
    easy = false;
    hard = false;
    master = false;
}

const init = () => {
    boxes.innerHTML = '';
    result.innerHTML = '';
    colorNum.innerHTML = '';
    rule.innerHTML = '';
    resetDifficulty();
}
init();


/////////////////////////////
// Markups for any difficulty
/////////////////////////////

const easyBox = () => {
    const markup = `
    <div class="box box--1"></div>
    <div class="box box--2"></div>
    <div class="box box--3"></div>
    `;
    boxes.insertAdjacentHTML('afterbegin', markup);
    resetDifficulty();
    easy = true;
    
}

const hardBox = () => {
    const markup = `
    <div class="box box--1"></div>
    <div class="box box--2"></div>
    <div class="box box--3"></div>
    <div class="box box--4"></div>
    <div class="box box--5"></div>
    <div class="box box--6"></div>
    `;
    boxes.insertAdjacentHTML('afterbegin', markup);
    resetDifficulty();
    hard = true;   
}

const masterBox = () => {
    const markup = `
    <div class="box box--1"></div>
    <div class="box box--2"></div>
    <div class="box box--3"></div>
    <div class="box box--4"></div>
    <div class="box box--5"></div>
    <div class="box box--6"></div>
    <div class="box box--7"></div>
    <div class="box box--8"></div>
    <div class="box box--9"></div>
    `;
    boxes.insertAdjacentHTML('afterbegin', markup);
    resetDifficulty();
    master = true;
}


/////////////////////////////
// Button click functionality
/////////////////////////////

// Control displayed text and HTML
const textControl = () => {
    rule.textContent = '(pick the right color)';
    boxes.textContent = '';
}

// If Reset button is clicked
resetBtn.addEventListener('click', init);

// Easy btn clicked
easyBtn.addEventListener('click', () => {
    if (!easy && master == false && hard == false) { 
        textControl();
        easyBox();
        colorBox();
    }
});

// Hard btn clicked
hardBtn.addEventListener('click', () => {
    if (!hard && easy == false && master == false) { 
        textControl();
        hardBox();
        colorBox();       
    }
});

// Master btn clicked
masterBtn.addEventListener('click', () => {
    if (!master && easy == false && hard == false) { 
        textControl();
        masterBox();   
        colorBox();
    }
});

// generate random RGB code //
const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return(`RGB(${r}, ${g}, ${b})`)  
}


//////////////////////////
// Box click functionality
//////////////////////////

const colorBox = () => {

    // Select all boxes //
    const allBox = document.querySelectorAll('.box');
    allBox.forEach(el => {
        el.style = `background-color : ${randomColor()}`;
    })
    const boxList = Array.from(allBox);

    // Generate random number for correct box //
    let number;

    if (!hard && !master && easy) number = Math.ceil(Math.random() * 3);
    else if (!easy && !master && hard)  number = Math.ceil(Math.random() * 6);
    else if (!easy && !hard && master) number = Math.ceil(Math.random() * 9);
    
    // Use number to select and style correct box //
    const correctBox = boxList[number - 1];
    const correctColor = randomColor();

    correctBox.style = `background-color: ${correctColor}`;
    colorQue.textContent = correctColor;
    
    // Prevent click event after the correct box have been selected
    let correct = false;

    // add event listner to check if clicked box is the correct box //
    boxList.forEach(el => {
        el.addEventListener('click', () => {
            if (!correct) { // !corrrect to prevent multiple clicking of correct box.
                if(el == correctBox) {
                    result.textContent = 'Correct!!! 🥳. Start new game 😁'; 
                    easy = false;
                    resetDifficulty();
                    correct = true;
                } else {
                    el.style = 'background-color : gray';
                    result.textContent = 'You\'re Close, try again 😁';
                }
            }
        })
    })

    console.log(number);
    console.log(correctBox);
    console.log(correctColor);
}





// make color question equal to one color box
// const colorQueBlock = () => {    

    // Alternate method
    // const correctBox = document.querySelector(`.box--${number}`);

    
    // const correctColor = randomColor();
    // correctBox.style = `background-color: ${correctColor}`;
    // console.log(correctBox)
    // colorQue.textContent = correctColor;
    // const alsoCorrectBox = allBoxList[number - 1];

    // return correctBox;
    
// }


// Box click functionality

// const checkAns = () => {
    

// }












