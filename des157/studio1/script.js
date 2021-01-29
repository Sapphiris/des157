(function () {
    "use strict";
    console.log("reading js");


    const dialogues = [];

    myForm.addEventListener("submit", function (event) {
        event.preventDefault();

        dialogues.push(`${document.querySelector("#mName").value}, I... I like you!`);
        dialogues.push(`I've liked you for all this time!`);
        dialogues.push(`${document.querySelector("#fName").value}, I... I like you too!`);
        dialogues.push(`. . . . .`);
        dialogues.push(`So... Are you free next ${document.querySelector("#day").value}?`);
        dialogues.push(`We can grab some ${document.querySelector("#food").value} togeth-`);
        dialogues.push(`${document.querySelector("#timeOfDay").value}!!! Meet me at ${document.querySelector("#location").value}!!!`);
        dialogues.push(`And don't be late!!!`);
        dialogues.push(`Ok bye! ♥`);
        dialogues.push(`Ehh???`);

        for (let i = 0; i < dialogues.length; i++) {
            document.querySelector(`#text${i}`).innerHTML = dialogues[i];
        }


        //transition pages

        document.querySelectorAll(".startScreen")[0].style.display = "none";
        document.querySelectorAll(".startScreen")[1].style.display = "none";
        document.querySelector("footer").style.display = "none";
        document.querySelector(".mangaScreen").style.display = "block";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.background = "url(images/manga.png), black";
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
        document.querySelector("body").style.backgroundPositionX = "center";
    });

})();