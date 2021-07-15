let ageGroup = [];
let male = [], female = [];

function chart_1() {

    fetch(apiUrl + '/age-groups')
        .then(res => {
            return res.json();
        })
        .then(data => {

            const obj = data.data;

            Object.entries(obj)
                .forEach(([key]) => {
                    ageGroup.push(key);
                })


            ageGroup.forEach((key) => {
                male.push(obj[key].casesMale);
                female.push(obj[key].casesFemale);
            })

            let ct1 = document.getElementById('myChart_1').getContext('2d');

            let myChart_1 = new Chart(ct1, {
                type: 'bar',
                data: {
                    labels: ageGroup,
                    datasets: [
                        {
                            label: 'Male',
                            data: male,
                            backgroundColor: 'rgba(54, 162, 235, .5)',
                            borderColor: 'rgba(54, 162, 235, 1)'
                        },
                        {
                            label: 'Female',
                            data: female,
                            backgroundColor: 'rgba(255, 99, 132, .5)',
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
                            color: 'rgb(0,0,0)'
                        }
                    }
                }
            });


        })
}


