(function () {
    "use strict";
})();

var myForm = document.querySelector("#myForm");

const dialogues = [];

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    dialogues.push(`${document.querySelector("#mName").value}, I... I like you!`);
    dialogues.push(`I've liked you for all this time!`);
    dialogues.push(`${document.querySelector("#fName").value}, I... I like you too!`);
    dialogues.push(`Our feelings are mutual???`);
    dialogues.push(`So... Are you free this coming ${document.querySelector("#day").value}?`);
    dialogues.push(`We can grab some ${document.querySelector("#food").value} togeth-`);
    dialogues.push(`${document.querySelector("#timeOfDay").value}!!! Meet me at ${document.querySelector("#location").value}!!!`);
    dialogues.push(`And don't be late!!!`);
    dialogues.push(`Ok bye! ♥`);
    dialogues.push(`Ehh?`);

    for (var i = 0; i < dialogues.length; i++) {
        document.querySelector(`#text${i}`).innerHTML = dialogues[i];
    }

    document.querySelector("#divForm").style.display = "none";
    document.querySelector("#divArticle").style.display = "block";
});