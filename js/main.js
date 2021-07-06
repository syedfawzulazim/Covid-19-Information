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


//Last update of data

const lastUpdate = document.querySelector('#time');
lastUpdate.textContent += Date().slice(0, 24);


/*
    Gets total number of covid cases, deaths,
    recoverd and last week cases
*/

//getData();

/*
    Gets total number of covid cases and
    recoverd patients from last week
*/

//getSevenDaysData();


/*
    Shows bar chart of age-grouped cases
*/

//chart_1();

/*
    Shows german state wise cases, deaths and recovered patients number
*/

//chart_2();

/*
    Shows vaccination status in a line chart
*/

//chart_3();

/*
    Shows different vaccine taken by people in pie chart
*/

//chart_4();

