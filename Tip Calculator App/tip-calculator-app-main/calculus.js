import { state } from "./state.js"

export function calculus() {
    const tip = Number(state.tipPorcentage),
        bill = Number(state.billInput),
        people = Number(state.numberOfPeople);

    const tipPorcentage = tip / 100,
        tipAmount = bill * tipPorcentage,
        total = tipAmount + bill

    const totalPerPerson = total / people,
        tipPerPerson = tipAmount / people

    if (totalPerPerson > 0 && totalPerPerson !== Infinity) {
        // I use .toFixed into this scope to prevent validation fail,
        // If we use .toFixed out of this scope Infinityis bypassed.
        const tipPerPersonFixedAt2 = tipPerPerson.toFixed(2),
            totalPerPersonFixedAt2 = totalPerPerson.toFixed(2);
        
        return { tipPerPersonFixedAt2, totalPerPersonFixedAt2 }
    }
}