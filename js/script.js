/*import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);*/

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 70) {
        navbar.classList.add('navbar-scrolled')
    } else if(window.scrollY < 70) {
        navbar.classList.remove('navbar-scrolled')
    }
});