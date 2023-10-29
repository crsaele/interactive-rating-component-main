let numberContainer = document.querySelector('.number-container');
let submitBtn = document.querySelector('#submit-btn');
let ratingState = document.querySelector('.state');
let completedState = document.querySelector('.completed-state');
let rateNumber = document.querySelector('#result');

numberContainer.addEventListener('click', event => {
    var numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected != undefined){
        submitBtn.addEventListener('click', () =>{
            ratingState.style.display = 'none';
            completedState.style.display = 'flex';   
        });
    }
})  