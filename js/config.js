// configuration du tab



const container = document.querySelector(".skills__details");
const btns = document.querySelectorAll(".skills__btn");
const skills = document.querySelectorAll(".content");

container.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove selected from other buttons
        btns.forEach(function(btn) {
            btn.classList.remove("skills__btn_active");
        });
        e.target.classList.add("skills__btn_active");
        // hide other skills    
        skills.forEach(function(article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

// configuration du navbar

const navBar = () => {
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".menu__inner");
    const navList = document.querySelectorAll(".menu__inner li");
    const body = document.getElementsByTagName("body");

    burger.addEventListener("click", () => {
        nav.classList.toggle("menu__inner_active");

    })
    navList.forEach(item => {
        console.log(item);
        item.addEventListener("click", () => {
            nav.classList.remove("menu__inner_active");
        })
    });
}
navBar();