import { calculus } from "./calculus.js"

export function insertResults() {
    const $perPersonTotalContainer = document.getElementById("perPersonTotal"),
        $perPersonTipContainer = document.getElementById("perPersonTip");
    //Next line I use the short circuit to prevent errors desestructuring undefined,
    //if you want to reuse the Calculus() in other module move the empty object to be returned by calculus after the if statement and delete the next short circuit.
    const {tipPerPersonFixedAt2 , totalPerPersonFixedAt2 } = calculus() || {};

    if(tipPerPersonFixedAt2 !== undefined && totalPerPersonFixedAt2 !== undefined) {
        $perPersonTotalContainer.textContent = '$' + totalPerPersonFixedAt2;
        $perPersonTipContainer.textContent = '$' + tipPerPersonFixedAt2;
    }
}