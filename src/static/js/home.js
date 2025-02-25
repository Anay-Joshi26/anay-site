const open_side_bar = "<svg id = 'side-bar-collapse-button' width = 49px height = 49px viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#64FFDA' transform='matrix(-1, 0, 0, 1, 0, 0)'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M4 6H20M4 12H14M4 18H9' stroke='#64FFDA' stroke-width='1.135' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg>";
const close_button_svg = "<svg id = 'sidebar-close-button' width = 39px height = 39px viewBox='-0.5 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#64FFDA'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' stroke='#CCCCCC' stroke-width='0.05'></g><g id='SVGRepo_iconCarrier'> <path d='M3 21.32L21 3.32001' stroke='#64FFDA' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M3 3.32001L21 21.32' stroke='#64FFDA' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg>";
    

document.addEventListener('DOMContentLoaded', function() {

    let button = document.getElementById('svg-container');
    let sideBar = document.querySelector('aside');
    let main = document.querySelector('main');

    button.addEventListener('click', function() {

        console.log(sideBar.style.display);

        if (sideBar.style.display === 'none' || sideBar.style.display === '') {
            open()

        } else {
            close()
        }

    });

    function close() {
        sideBar.style.display = 'none';
        button.innerHTML = open_side_bar;
        document.querySelector('body').style.overflow = 'auto';
        main.style.filter = 'none';
        main.style.pointerEvents = 'auto';
    }

    function open() {
        sideBar.style.display = 'flex';
        button.innerHTML = close_button_svg;
        document.querySelector('body').style.overflow = 'hidden';
        main.style.filter = 'blur(9px)';
        main.style.pointerEvents = 'none';
    }


});