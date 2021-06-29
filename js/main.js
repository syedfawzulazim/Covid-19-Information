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

function getDays() {
    let days;

    fetch(apiUrl + '/history/cases/7')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log("error");
            }
        })
        .then(data => {
            days = data.data;
            return fetch(apiUrl + '/history/recovered/10');
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                console.log("error");
            }
        })
        .then(data => {
            const recovered = data.data;

            const tbody = document.querySelector('.tbody');


            //       console.log((days[0].date.slice(0, 10)))

            for (let i = 0; i < days.length; i++) {
                const tr = `<tr>
                    <td>${days[i].date.slice(0, 10)} </td>
                    <td>${days[i].cases} </td>
                    <td>${recovered[i].recovered} </td>
                </tr>`;
                tbody.innerHTML += tr;
            }

        }).catch(error => {
            alert("please Wait...")
        })
}
let male = [], female = [];

function getAge() {
    fetch(apiUrl + '/age-groups')
        .then(res => {
            return res.json();
        })
        .then(data => {

            const obj = data.data;

            male.push(obj["A00-A04"].casesMale);
            female.push(obj["A00-A04"].casesFemale);

            male.push(obj["A05-A14"].casesMale);
            female.push(obj["A05-A14"].casesFemale);

            male.push(obj["A15-A34"].casesMale);
            female.push(obj["A15-A34"].casesFemale);

            male.push(obj["A35-A59"].casesMale);
            female.push(obj["A35-A59"].casesFemale);

            male.push(obj["A60-A79"].casesMale);
            female.push(obj["A60-A79"].casesFemale);

            male.push(obj["A80+"].casesMale);
            female.push(obj["A80+"].casesFemale);

            // console.log(obj)
        })
}


//getAge();
let states = [];
let cases = [], deaths = [], recovered = [];

function getStates() {
    fetch('https://api.corona-zahlen.org/states')
        .then(res => {
            return res.json();
        })
        .then(data => {
            const obj = data.data;
            //console.log(obj)
            Object.entries(obj)
                .forEach(([key]) => {
                    states.push(key)
                })

            //console.log(states)

            states.forEach(key => {
                cases.push(obj[key].cases)
                deaths.push(obj[key].deaths)
                recovered.push(obj[key].recovered)
            })
        })
}



//console.log(states)

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A00-A04', 'A05-A13', 'A15-A34', 'A35-A59', 'A60-A79', 'A80+'],
        datasets: [
            {
                label: 'Male',
                data: male,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Female',
                data: female,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart-1: Age-group Cases',
                position: 'bottom',
            }
        }
    }
});


var ctx = document.getElementById('myChart_states').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: states,
        datasets: [
            {
                label: 'Cases',
                data: cases,
                backgroundColor: 'rgb(255, 160, 66)',
                borderColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Deaths',
                data: deaths,
                backgroundColor: 'rgb(255, 66, 66)',
                borderColor: 'rgba(255, 99, 132, 1)'
            },
            {
                label: 'Recoverd',
                data: recovered,
                backgroundColor: 'rgb(80, 179, 4)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart-2: State wise Deaths & Cases',
                position: 'bottom'
            }
        }
    }
});



getData();
getDays();
getAge();

getStates();