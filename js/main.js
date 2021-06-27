const menuBar = document.querySelector(".header__menu");

let firstTime = 0;


function openMenu(){

    if(menuBar.classList.contains('hide-for-mobile-table') )
    {
        menuBar.classList.remove('hide-for-mobile-table');
    }
    else{
        menuBar.classList.add('hide-for-mobile-table');
    }
}


const apiUrl = 'https://api.corona-zahlen.org/germany';

async function getData(){
    const response = await fetch(apiUrl);

    const t = document.querySelectorAll('.article__text');

    if(response.ok){
        const data = await response.json();

        t[0].innerText = data.cases;
        t[1].innerText = data.deaths;
        t[2].innerText = data.recovered;
       
    }
    else{
        alert("Please Wait For API to Response")
    }
   

}

getData();

