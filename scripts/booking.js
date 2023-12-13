/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var days = 0;
var totalCost = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

function daySelected(){
    if (this.classList.contains('clicked')){
        this.classList.remove('clicked');
        days--;
    }
    else{
        this.classList.add('clicked');
        days++;
    }
    calculateCost();
}

mondayButton.addEventListener('click', daySelected);
tuesdayButton.addEventListener('click', daySelected);
wednesdayButton.addEventListener('click', daySelected);
thursdayButton.addEventListener('click', daySelected);
fridayButton.addEventListener('click', daySelected);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


const clearButton = document.getElementById('clear-button');

function clearSelected(){
    days = 0;
    mondayButton.classList.remove('clicked');
    tuesdayButton.classList.remove('clicked');
    wednesdayButton.classList.remove('clicked');
    thursdayButton.classList.remove('clicked'); 
    fridayButton.classList.remove('clicked');
    calculateCost();
}

clearButton.addEventListener('click', clearSelected);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfButton = document.getElementById('half');

function halfSelected(){
    if (!this.classList.contains('clicked')){
        costPerDay = 20;
        this.classList.add('clicked');
        fullButton.classList.remove('clicked');
        calculateCost();
    }
}

halfButton.addEventListener('click', halfSelected);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullButton = document.getElementById('full');

function fullSelected(){
    if (!this.classList.contains('clicked')){
        costPerDay = 35;
        this.classList.add('clicked');
        halfButton.classList.remove('clicked');
        calculateCost();
    }
}

fullButton.addEventListener('click', fullSelected);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost(){
    let costLabel = document.getElementById('calculated-cost');
    totalCost = costPerDay*days;
    costLabel.innerHTML = totalCost;
}