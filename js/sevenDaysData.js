function getSevenDaysData() {
    let days;

    fetch(apiUrl + '/history/cases/7')
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                alert('No or bad response from API');
            }
        })
        .then(data => {
            days = data.data;
            return fetch(apiUrl + '/history/recovered/7');
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                alert('No or bad response from API');
            }
        })
        .then(data => {
            const recovered = data.data;

            const tbody = document.querySelector('.tbody');

            for (let i = 0; i < days.length; i++) {
                const tr = `<tr>
                    <td>${days[i].date.slice(0, 10)} </td>
                    <td>${days[i].cases} </td>
                    <td>${recovered[i].recovered} </td>
                </tr>`;
                tbody.innerHTML += tr;
            }

        }).catch(error => {
            alert(`please Wait, Error: ${error}`);
        })
}