let vacc_no = [], vacc_name = [];

function chart_4() {

    fetch('https://api.corona-zahlen.org/vaccinations')
        .then(res => {
            return res.json();
        })
        .then(data => {
            const obj = data.data.vaccination;

            Object.entries(obj)
                .forEach(([key, value]) => {
                    vacc_name.push(key);
                    vacc_no.push(value);
                })


            let ct4 = document.getElementById('myChart_4').getContext('2d');
            let myChart_4 = new Chart(ct4, {
                type: 'pie',
                data: {
                    labels: vacc_name,
                    datasets: [{
                        label: 'Vaccination',
                        data: vacc_no,
                        backgroundColor: [
                            'rgb(75, 192, 192)',
                            'rgb(255, 205, 86)',
                            'rgb(201, 203, 207)',
                            'rgb(54, 162, 235)'

                        ],
                        hoverOffset: 10
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
                            text: 'Chart-4: Differnt vaccines taken by people',
                            position: 'bottom',
                            color: 'rgb(0,0,0)'
                        }
                    }
                }
            });

        })

}





