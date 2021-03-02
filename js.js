window.onload = function () {
    const hero = document.querySelector(".hero");

    hero.addEventListener("mousemove", (e) => {
        // Seteaza intensitatea miscarii
        let offsetX = -e.offsetX / 100;
        hero.style.transition = "all .3s linear";
        hero.style.backgroundPositionX = offsetX + "px";

    })

    //Revino la pozitia initiala ( optional )
    hero.addEventListener("mouseleave", (e) => {
        // hero.style.backgroundPositionX = 0;
    })
}


