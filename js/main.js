//Mobile Menu

const menuBar = document.querySelector(".header__menu");

let firstTime = 0;

function openMenu() {

    if (menuBar.classList.contains('hide-for-mobile-table')) {
        menuBar.classList.remove('hide-for-mobile-table');
    }
    else {
        menuBar.classList.add('hide-for-mobile-table');
    }
}



// getData();
// getDays();


// chart_1();
// chart_2();

// chart_3();
chart_4();

