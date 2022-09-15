document.addEventListener('DOMContentLoaded', nav)

function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
    });
});

const domContainer = document.querySelector('#scroll-up');
const root = ReactDOM.createRoot(domContainer);
root.render(e(scrollUp));
