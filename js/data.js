const apiUrl = 'https://api.corona-zahlen.org/germany';

async function getData() {
    const response = await fetch(apiUrl);

    const t = document.querySelectorAll('.article__text');

    if (response.ok) {
        const data = await response.json();

        t[0].innerText = data.cases;
        t[1].innerText = data.deaths;
        t[2].innerText = data.recovered;
        t[3].innerText = Math.round(data.casesPerWeek);

    }
    else {
        alert("Please Wait For API to Response");
    }


}