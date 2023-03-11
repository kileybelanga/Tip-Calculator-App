import { state } from "./state.js"

export function calculus() {
    const tip = state.tipPorcentage;
    const bill = state.billInput;
    const people = state.numberOfPeople;

    const tipPercentage = tip / 100
    const tipAmount = bill * tipPercentage
    const total = tipAmount + bill

    const totalPerPerson = total / people
    const tipPerPerson = tipAmount / people

    if (totalPerPerson > 0) {
        console.log(totalPerPerson.toFixed(2))
    }

}