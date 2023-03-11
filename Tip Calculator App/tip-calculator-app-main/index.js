import { state } from "./state.js"
import { calculus } from "./calculus.js"

const doc = document;
document.addEventListener("DOMContentLoaded", () => {   
    const $billTotalInput = doc.getElementById("billTotalInput");
    const $tipButtons = doc.querySelectorAll(".tip-button");
    const $customTipInput = doc.getElementById("customTipInput");
    const $numberOfPeople = doc.getElementById("numberOfPeople");

    $billTotalInput.addEventListener("keyup", (event) => {
        state.billInput = event.target.value;
        calculus()
    })
    $tipButtons.forEach((button) => {
        button.addEventListener("click", () => {
            state.tipPorcentage = button.value;
            $customTipInput.value = ''
            calculus()
        })
    })
    $customTipInput.addEventListener("keyup", (event) => {
        state.tipPorcentage = event.target.value;
        calculus()
    })
    $numberOfPeople.addEventListener("keyup", (event) => {
        state.numberOfPeople = event.target.value;
        calculus()
    })


})