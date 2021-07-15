let states = [];
let cases = [], deaths = [], recovered = [];


function chart_2() {

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

            let ct2 = document.getElementById('myChart_2').getContext('2d');
            let myChart_2 = new Chart(ct2, {
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
                            text: 'Chart-2: State wise Cases, Deaths & Recovered',
                            position: 'bottom',
                            color: 'rgb(0,0,0)'
                        }
                    }
                }
            });

        })



}