document.addEventListener('DOMContentLoaded', () => {
    
    const burger = document.getElementById('burger');
    const header = document.querySelector('.header');

    if (burger && header) {
        burger.addEventListener('click', () => {
            header.classList.toggle('active');
        });
    }
});
