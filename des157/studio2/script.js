(function () {

    'use strict';

    const openBtns = document.querySelectorAll("main img");
    const closeBtns = document.querySelectorAll(".close");

    for(const eachBtn of openBtns){
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById(`ol-${thisBtn}`).className = "overlay showing";
        });
    }

    for(const eachBtn of closeBtns){
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(".showing").className = "overlay hidden";
        });
    }

    document.addEventListener("keydown", function(event){
        if(event.key === "Escape"){
            document.querySelector(".showing").className = "overlay hidden";
        }
    });

})();