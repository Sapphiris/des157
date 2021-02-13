(function () {

    'use strict';



    //OPENING AND CLOSING OVERLAYS

    const openBtns = document.querySelectorAll("main img"); //assigning each icon to a variable, becoming buttons later
    const closeBtns = document.querySelectorAll(".close"); //assigning each X of every overlay to a variable, becoming buttons later

    for (const eachBtn of openBtns) { //for each icon button, when it is clicked, retrieve the specific overlay and show it
        eachBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const thisBtn = event.target.id; //since there are specific ids for each overlay, this is needed to retrieve each one properly, for the next line
            document.getElementById(`ol-${thisBtn}`).className = "overlay showing";
        });
    }

    for (const eachBtn of closeBtns) { //for each close button, when it is clicked, hide the overlay
        eachBtn.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(".overlay.showing").className = "overlay hidden";
        });
    }

    document.addEventListener("keydown", function (event) { //when escape key is pressed, whatever overlay showing will be hidden
        if (event.key === "Escape") {
            document.querySelector(".overlay.showing").className = "overlay hidden";
        }
    });



    //DESCRIPTION AND SIGNIFICANCE BUTTONS

    //creating an object array
    /*
    the reason for having an object array in this case is that I needed to create unique ids for each game
    and i found it tedious to constantly go back and forth, retrieving each id individually and individually assigning stuff to them
    i'm sure that there's probably a much better or more efficient way of doing this, but i also wanted to test out object arrays :D
    if it works, it works lol
    */
    const oltext = { //object array nested in an object array
        "MapleStory": { //example --> "Maplestory" is a key, everything inside it is its value
            // ↓ Description is also a key, and its string is its value. However, both are a value to the key "Maplestory"
            Description: "Maplestory is an MMORPG, or a Massively Multiplayer Online Role-Playing Game. There are countless classes to choose from and there are a lot of quests and storylines to accomplish. Maplestory, naturally as an MMORPG, gave many people a sense of accomplishment, as there are always more tasks and rewards to be given. It is not as popular today, but this is a game that players would always remember in their hearts.",
            Significance: "Maplestory was significant in my life because I felt like it was always there when I needed it most, so I always turned to Maplestory to level up my social skills. Growing up, I was often bullied and had a hard time making friends. I appreciate Maplestory for allowing me  to feel socially accepted and ease my social anxiety. I had always been a shy and timid person but I was able to open up in Maplestory."
        },
        "World_Of_Warcraft": {
            Description: "World of Warcraft is an MMORPG, or a Massively Multiplayer Online Role-Playing Game. It is one of the only subscription-based games on the market today and is one of the most-known MMORPGs out there. However, it has been seeing a decline in popularity, largely because of it being subscription-based. Popular games today are either free or have a one-time payment, so this dissuades a lot of players.",
            Significance: "World of Warcraft was significant in my life because I felt really accomplished and proud of myself every time I touched this game. As I was often bullied in my childhood, I was usually dispirited. At home, my parents would also yell at me and my older brother would bully me as well. World of Warcraft gave me something to look forward to, and I felt like every accomplishment was rewarding and uplifting."
        },
        "Starcraft_2": {
            Description: "Starcraft 2 is an RTS game, or a Real-Time-Strategy game. The Starcraft series has been one of the most well-known RTS games on the market. It is extremely popular with Korean players, and it is a game not for the faint-hearted. Starcraft 2 is a very fast-paced competitive game. However, more casual players are always welcome to play the campaign or play its arcade mode, which comprises player-made custom maps and modes.",
            Significance: "Starcraft 2 was significant in my life because it helped me realize the difference between “having fun” and “feeling accomplished”. Of course, one can have fun by feeling accomplished, but my mind made a clear distinction between those two concepts. I felt like I had genuine fun playing Starcraft 2’s arcade mode. As I played more, I was accepted into their community and had a blast playing with all these people."
        },
        "Overwatch": {
            Description: "Overwatch is an FPS game, or a First-Person Shooter game. Although it is classified as an FPS, it is not a tactical shooter game, such as CS:GO, Call of Duty, Valorant, etc. In my opinion, Overwatch is more of an ability-based shooting game, which largely depends on strategy and team coordination. Of course, the level of skill is sometimes dependent on your ability to shoot things, but it is not the core skill. ",
            Significance: "Overwatch was significant in my life because it was the first FPS game that I felt comfortable playing. I suffer from motion sickness, whether it’s riding the backseat of a car or playing any first-person game. Initially, I did get nauseous a few times playing Overwatch, but then I felt okay afterward. As Overwatch required more strategy than other shooters, I felt like I was able to fit in (because I love strategy games). At the time of writing, this is currently the main game I am playing."
        },
        "League_of_Legends": {
            Description: "League of Legends is a MOBA game, or a Multiplayer Online Battle Arena game. There are two teams against each other, trying to overtake each other’s base. This game requires a lot of communication and teamwork because it is really difficult to carry an entire team by yourself, compared to other MOBAs like Dota 2 or Heroes of Newerth. League of Legends has arguably been the most popular game in the entire world. As its popularity is enormous, it also has a lot of toxicity in its community.",
            Significance: "League of Legends was significant in my life because it was what gave me the motivation to be better. I studied so many mechanics of the game and how each character interacted. I wanted to prove to myself that I can reach higher ranks, competitively. I used to play a different MOBA called “Heroes of Newerth”. I was in the top 500 leaderboards in that game and I felt like that was my peak. I wanted to reach even higher peaks with League of Legends. My growth was rapidly increasing, and I was proud of myself."
        },
    };

    //creating unique ids using key values from each nested object

    var i = 0; //creating variable i to be used later
    const olcontent = document.getElementsByClassName("oltext"); //there are five "oltext" divs in the html document. I am retrieving them and making an array

    for (const game in oltext) { //retrieving each key in the object array
        const content = olcontent[i++]; //each "oltext" div is called for each iteration

        for (const [key, value] of Object.entries(oltext[game])) { //taking both the key and value of each parent key
            var p = document.createElement("p"); //creating the "p" element
            p.id = `${game}_${key}`; //assigning each "p" a unique id
            p.innerText = value; //each "p" will be given text

            switch (key) { //initial assignment to show the description and hide the significance
                case "Description":
                    p.className = "gamedesc showing";
                    break;
                case "Significance":
                    p.className = "significance hidden";
                    break;
            }

            content.appendChild(p); //the content is created, but wasn't added to html, so this is important
        }
    }

    i = 0; //reseting the counter for the next set of code to create and assign buttons

    //creating buttons and changing the class of each unique id previously created

    for (const game of document.getElementsByClassName("bottom-buttons")) { //retrieving every "bottom-buttons" div from html
        var descButton = document.createElement("button"); //creating the "description" button
        var signButton = document.createElement("button"); //creating the "significance" button

        descButton.innerHTML = "Description"; //putting text on the button
        signButton.innerHTML = "Significance"; //putting text on the button

        descButton.className = "desc-button"; //assigning the button a class
        signButton.className = "sig-button"; //assigning the button a class

        const gameName = Object.entries(oltext)[i++][0]; //retrieving only the parent keys of the object array, which is the game name
        descButton.onclick = function () { //when you click the "description" button, show the description and hide the significance
            document.getElementById(`${gameName}_Description`).className = "gamedesc showing";
            document.getElementById(`${gameName}_Significance`).className = "significance hidden";
        };

        signButton.onclick = function () { //when you click the "significance" button, show the significance and hide the description
            document.getElementById(`${gameName}_Description`).className = "gamedesc hidden";
            document.getElementById(`${gameName}_Significance`).className = "significance showing";
        };

        game.appendChild(descButton); //shoved into the html
        game.appendChild(signButton); //shoved into the html
    }
})();