// navbar scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 70) {
        navbar.classList.add('navbar-scrolled')
    } else if(window.scrollY < 70) {
        navbar.classList.remove('navbar-scrolled')
    }
});

// dynamic text
(function (){
    var words = ["Перевод", "Клин", "Тайп"]
    i = 0;
    setInterval(function(){
        $('#words').fadeOut(function(){
            $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
        });
    }, 2000)
})()