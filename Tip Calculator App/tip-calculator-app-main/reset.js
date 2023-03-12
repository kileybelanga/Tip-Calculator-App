import { state } from "./state.js";

const doc = document;

export function reset() {
    
    const $perPersonTip =  doc.getElementById('perPersonTip'),
        $perPersonTotal = doc.getElementById('perPersonTotal'),
        $billTotalInput = doc.getElementById("billTotalInput"),
        $customTipInput = doc.getElementById("customTipInput"),
        $numberOfPeople = doc.getElementById("numberOfPeople")

    $perPersonTip.textContent = "$0.00";
    $perPersonTotal.textContent = "$0.00";
    $billTotalInput.value = "";
    $customTipInput.value = "";
    $numberOfPeople.value = "";

    state.billInput = 0;
    state.numberOfPeople = 0;
    state.tipPorcentage = 0;
}