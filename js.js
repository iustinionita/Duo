window.onload = function () {

    // HERO PARRALAX EFFECT

    const hero = document.querySelector(".hero");

    hero.addEventListener("mousemove", (e) => {
        // Seteaza intensitatea miscarii
        let offsetX = -e.offsetX / 100;
        hero.style.transition = "all .3s linear";
        hero.style.backgroundPositionX = offsetX + "px";

    });

    //Revino la pozitia initiala ( optional )
    hero.addEventListener("mouseleave", (e) => {
        // hero.style.backgroundPositionX = 0;
    });


    //SWITCHER

    const switcher = document.querySelector(".switcher");
    const dot = document.querySelector(".dot");
    const exp1 = document.querySelector("#exp-1");
    const exp2 = document.querySelector("#exp-2");
    switcher.addEventListener("click", (e) => {
        switch (dot.style.left) {
            case dot.style.left = "0px":
                dot.style.left = "65px";
                break;
            case dot.style.left = "65px":
                dot.style.left = "0px";
                break;
        }
    });
}


// const switcher = document.querySelector(".switcher");
//     const dot = document.querySelector(".dot");
//     const exp1 = document.querySelector("#exp-1");
//     const exp2 = document.querySelector("#exp-2");
//     switcher.addEventListener("click", (e) => {
//         switch (dot.style.left) {
//             case dot.style.left = "0px":
//                 dot.style.left = "65px";
//                 exp1.style.color = "#b3b3b3";
//                 exp2.style.color = "white";
//                 break;
//             case dot.style.left = "65px":
//                 dot.style.left = "0px";
//                 exp2.style.color = "#b3b3b3";
//                 exp1.style.color = "white";
//                 break;
//         }
//     });

