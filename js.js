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
    });

    const scroll = document.querySelector(".scroll");
    const scrollP = document.querySelector(".scroll > p");
    let timer = null;
    window.addEventListener("scroll", (e) => {
        if (timer !== null) {
            scroll.style.opacity = "1";
            let percentage = Math.round(window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100);
            scrollP.innerHTML = percentage + "%";

            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            // window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100
            scroll.style.opacity = "0";
        }, 150);

    }, false);
};

    // ANIMATIONS

    //     const members = document.querySelectorAll('.member');
    //     const tl = gsap.timeline();
    //     members.forEach(member => {
    //         member.addEventListener("mouseover", () => {
    //             member.setAttribute("id", "active");
    //             // console.log(member);
    //             let newMember = member;
    //             let divs = newMember.querySelectorAll("div");
    //             let TLmPic = divs[0];
    //             let TLmName = divs[1];
    //             let TLmTitle = divs[2];
    //             let TLmDesc = divs[3];

    //             tl.to(member, { duration: 0.3, boxShadow: '0px 5px 15px 0px rgba(128, 128, 128, 0.3)' });
    //             tl.to(TLmPic, { duration: 0.3, width: '100px', right: '130px', bottom: '30px' }, 0);
    //             tl.to(TLmName, { duration: 0.3, bottom: '110px', left: '40px' }, 0);
    //             tl.to(TLmTitle, { duration: 0.3, bottom: '110px', left: '40px' }, .02);
    //             tl.to(TLmDesc, { duration: 0.3, opacity: 1, top: '140px' }, .2);
    //             tl.play();
    //             member.addEventListener("mouseleave", () => {
    //                 tl.reverse();
    //             })
    //         });

    //     })











// tl.to(member, { duration: 0.3, boxShadow: '0px 5px 15px 0px rgba(128, 128, 128, 0.3)' });
// tl.to(TLmPic, { duration: 0.3, width: '100px', right: '130px', bottom: '30px' }, 0);
// tl.to(TLmName, { duration: 0.3, bottom: '110px', left: '40px' }, 0);
// tl.to(TLmTitle, { duration: 0.3, bottom: '110px', left: '40px' }, .02);
// tl.to(TLmDesc, { duration: 0.3, opacity: 1, top: '140px' }, .2);
// tl.play();

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

