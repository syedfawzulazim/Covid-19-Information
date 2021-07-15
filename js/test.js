function test() {
    let test;
    let cwk = [], prt = [], pot = [], por = [];
    fetch('https://api.corona-zahlen.org/testing/history/7')
        .then(res => {
            return res.json();
        })
        .then(data => {
            test = data.data.history;
            console.log(test)
            console.log(typeof (test[0]['positivityRate']))


            const tbody_2 = document.querySelector('.tbody_2');

            for (let i = 0; i < test.length; i++) {

                cwk.push(test[i]['calendarWeek']);
                prt.push(test[i]['performedTests']);
                pot.push(test[i]['positiveTests']);


                const tr = `<tr>
                    <td>${test[i]['calendarWeek']} </td>
                    <td>${test[i]['performedTests']} </td>
                    <td>${test[i]['positiveTests']} </td>
                    <td>${(test[i]['positivityRate']).toFixed(3)} </td>
                </tr>`;
                tbody_2.innerHTML += tr;
            }


            let ct5 = document.getElementById('myChart_5').getContext('2d');
            let myChart_5 = new Chart(ct5, {
                type: 'bar',
                data: {
                    labels: cwk,
                    datasets: [
                        {
                            label: 'Performed Tests',
                            data: prt,
                            backgroundColor: 'rgb(255, 160, 66)',
                            borderColor: 'rgba(54, 162, 235, 1)'
                        },
                        {
                            label: 'Positive Tests',
                            data: pot,
                            backgroundColor: 'rgb(255, 66, 66)',
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
                            text: 'Chart-5: Weekly Testing Data',
                            position: 'bottom',
                            color: 'rgb(255,255,255)'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            color: 'rgb(255,255,255)'
                        }
                    }
                }
            });
        })



}