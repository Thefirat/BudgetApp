//variablar med konstant värde; 
//för inkomst och kostnad listor i rad (6,7), 
//för input i rad (11,12,13)
//för totalt summa (16,17,18)
//addKnp i rad (21) körs när knappen klickas på  


const knapp = document.querySelector(".btn");

const inkomstListan = document.querySelector("#inkomstLista");
const kostnadsListan = document.querySelector("#kostnadsLista");

const inputValue = document.querySelector("#value");
const inputBeskrivning = document.querySelector("#beskrivning");
const selector = document.querySelector(".select-container");

const inkomstTotal = document.querySelector("#totaltInkomst");
const kostnadTotal = document.querySelector("#totaltKostnad");
const summaTotal = document.querySelector("#totaltSumma");

knapp.addEventListener("click", addKnp);

function addKnp() {
    const createList = document.createElement("li");
    if (selector.selectedIndex == "0") {

        inkomstListan.appendChild(createList);

        createList.innerHTML = inputBeskrivning.value + " " + inputValue.value;
        inkomstTotal.innerHTML = Number(inkomstTotal.innerHTML) + Number(inputValue.value);
        summaTotal.innerHTML = Number(inkomstTotal.innerHTML) - Number(kostnadTotal.innerHTML);
    } else {
        kostnadsListan.appendChild(createList);
        createList.innerHTML = inputBeskrivning.value + " " + inputValue.value;
        kostnadTotal.innerHTML = Number(kostnadTotal.innerHTML) + Number(inputValue.value);
        summaTotal.innerHTML = Number(inkomstTotal.innerHTML) - Number(kostnadTotal.innerHTML);
    }
} 