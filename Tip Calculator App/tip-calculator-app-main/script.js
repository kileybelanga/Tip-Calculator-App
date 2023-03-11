//getting global access to input and buttons

const billInput = document.getElementById('billTotalInput')
//tip buttons
const tipButtonDivOne = document.getElementById('tipButtonOne');
const tipButtonDivTwo = document.getElementById('tipButtonTwo');
const tipButtonDivThree = document.getElementById('tipButtonThree');
const tipButtonDivFour = document.getElementById('tipButtonFour');
const tipButtonDivFive = document.getElementById('tipButtonFive');
const customTipInputDiv = document.getElementById('customTipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal')
const perPersonTipDiv = document.getElementById('perPersonTip');

function calculateBill (id){
    const bill = Number(billInput.value);
    const people = Number(numberOfPeopleDiv.value);
    let tip 
    if (id == "tipButtonOne") {
		tip = Number(tipButtonDivOne.value); 
	  } else if (id == "tipButtonTwo"){
        tip = Number(tipButtonDivTwo.value); 
      } else if (id == "tipButtonThree"){
        tip = Number(tipButtonDivThree.value);
    } else if (id == "tipButtonFour"){
        tip = Number(tipButtonDivFour.value);
    } else if (id == "tipButtonFive"){
        tip = Number(tipButtonDivFive.value);
    } else {
        tip = Number(customTipInputDiv.value);
    }
    // event.preventDefault();


    const tipPercentage = tip / 100
    const tipAmount = bill * tipPercentage
    const total = tipAmount + bill
    const totalPerPerson = total / people

    if(people > 0) {
        perPersonTotalDiv.innerHTML = `$${totalPerPerson.toFixed(2)}`
    }

};


function calculateTip (id){
    const bill = Number(billInput.value);
    const people = Number(numberOfPeopleDiv.value);
    let tip
    if (id == "tipButtonOne") {
		tip = Number(tipButtonDivOne.value); 
	  } else if (id == "tipButtonTwo"){
        tip = Number(tipButtonDivTwo.value); 
      } else if (id == "tipButtonThree"){
        tip = Number(tipButtonDivThree.value);
    } else if (id == "tipButtonFour"){
        tip = Number(tipButtonDivFour.value);
    } else if (id == "tipButtonFive"){
        tip = Number(tipButtonDivFive.value);
    } else {
        tip = Number(customTipInputDiv.value);
    }
    event.preventDefault();
    const tipPercentage = tip / 100
    const tipAmount = bill * tipPercentage
    const tipPerPerson = tipAmount / people

    if(people > 0) {
        perPersonTipDiv.innerHTML = `$${tipPerPerson.toFixed(2)}`
    }
};

 
//error message
const errorMessage = () => {
    var people = Number(numberOfPeopleDiv.value);

if (people <= 0) {
    document.getElementById("numberOfPeople").style.border = "thin solid red";
    document.getElementById("error").innerText = "Can't be zero.";

//displays 0 as the result
    document.getElementById('perPersonTip').innerHTML = '$' + (Math.round(0)).toFixed(2);
    document.getElementById('perPersonTotal').innerHTML = '$' + (Math.round(0)).toFixed(2);


    console.log("can't be zero");
} else{
    document.getElementById("numberOfPeople").style.border = "none";
    document.getElementById("error").innerText = " ";
};
};


// reset form and results
const resetForm = () =>  {
    document.getElementById("tipForm").reset();
    document.getElementById('perPersonTip').innerHTML = '$' + (Math.round(0)).toFixed(2);
    document.getElementById('perPersonTotal').innerHTML = '$' + (Math.round(0)).toFixed(2);
    document.getElementById("numberOfPeople").style.border = "none";
    document.getElementById("error").innerText = " ";
  };
