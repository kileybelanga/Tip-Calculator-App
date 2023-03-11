import { state } from "./state.js"
import { insertResults } from "./insertResults.js"

const doc = document;
document.addEventListener("DOMContentLoaded", () => {   
    const $billTotalInput = doc.getElementById("billTotalInput"),
        $tipButtons = doc.querySelectorAll(".tip-button"),
        $customTipInput = doc.getElementById("customTipInput"),
        $numberOfPeople = doc.getElementById("numberOfPeople");

    $billTotalInput.addEventListener("keyup", (event) => {
        state.billInput = event.target.value;
        insertResults();
    })
    $tipButtons.forEach((button) => {
        button.addEventListener("click", () => {
            state.tipPorcentage = button.value;
            $customTipInput.value = ''
            insertResults();
        })
    })
    $customTipInput.addEventListener("keyup", (event) => {
        state.tipPorcentage = event.target.value;
        insertResults();
    })
    $numberOfPeople.addEventListener("keyup", (event) => {
        state.numberOfPeople = event.target.value;
        insertResults();
    })
})