
let date = [], vaccination = [], fvac = [], svac = [];

function chart_3() {


    fetch('https://api.corona-zahlen.org/vaccinations/history/7')
        .then(res => {
            return res.json();
        }).then(data => {
            const obj = data.data;
            //console.log(obj)

            obj.history.forEach(element => {
                date.push(element.date.slice(0, 10));
                fvac.push(element.firstVaccination);
                svac.push(element.secondVaccination);
                vaccination.push(element.vaccinated);
            })

            const tbody = document.querySelector('.tbody_1');

            for (let i = 0; i < date.length; i++) {
                const tr =
                    `<tr>
                        <td>${date[i]} </td>
                        <td>${fvac[i]} </td>
                        <td>${svac[i]} </td>
                        <td>${vaccination[i]} </td> 
                    </tr>`;

                tbody.innerHTML += tr;
            }

            let ct3 = document.getElementById('myChart_3').getContext('2d');
            let myChart_3 = new Chart(ct3, {
                type: 'line',
                data: {
                    labels: date,
                    datasets: [{
                        label: 'Vaccinated',
                        data: vaccination,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: .1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Chart-3: Data about Vaccination',
                            position: 'bottom',
                            color: 'rgb(0,0,0)'
                        }
                    }
                }
            });


        })

}



// console.log({ date })
// console.log(vaccination)