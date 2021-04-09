const ta = document.querySelector("#textarea");
const btn = document.querySelector("#button");
const vo = document.querySelector("#value-output");
const reset = document.querySelector("#reset");

function getValues() {
    let values = ta.value.split("\n");
    console.log(values);

    removeDuplicates(values);
}

function removeDuplicates(values) {
    let uniqueValues = [...new Set(values)];
    uniqueValues = uniqueValues.filter(function(el) {
        return el != "";
    });
    console.log(uniqueValues);
    ta.value = "";

    appendUniqueValues(uniqueValues);
}

function appendUniqueValues(uniqueValues) {
    for (let i = 0; i < uniqueValues.length; i++) {
        let appendLiEl = document.createElement("li");
        appendLiEl.textContent = uniqueValues[i];
        vo.appendChild(appendLiEl);
    }
}

function resetValues() {
    vo.innerHTML = "";
}

btn.addEventListener("click", getValues);
reset.addEventListener("click", resetValues);