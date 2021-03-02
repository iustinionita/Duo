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
    const cardContent = document.querySelectorAll(".card-content");
    const cardContent2 = document.querySelectorAll(".card-content2");
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

    let switchPosition = 0;

    switcher.addEventListener("click", (e) => {
        if (switchPosition === 0) {
            cardContent.forEach(element => {
                element.setAttribute("style", "transform: translateY(120%);")
            });
            cardContent2.forEach(element => {
                element.setAttribute("style", "transform: translateY(-100%);")
            });
            switchPosition = 1;
        } else {
            cardContent.forEach(element => {
                element.setAttribute("style", "transform: translateY(0);")
            });
            cardContent2.forEach(element => {
                element.setAttribute("style", "transform: translateY(30%);")
            });
            switchPosition = 0;
        }

    })

    // NAV SHOW-UP ON SCROLL
    const nav = document.querySelector('nav');

    window.addEventListener("scroll", (e) => {
        if (window.scrollY >> 200) {
            nav.classList.add("nav-scroll");
        } else if (window.scrollY << 200) {
            nav.classList.remove("nav-scroll");
        }
    })
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

