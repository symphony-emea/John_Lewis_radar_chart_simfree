const ctx = document.getElementById('myChart');

const data = {
    labels: [
        'i14',
        'i14 Plus',
        'i14 Pro',
        'i14 Pro Max',
        'iSE (2022)',
        'P6a',
        'P7',
        'P7 Pro',
        'P7a',
        'Galaxy A34 5G',
        'Galaxy A54 5G',
        'S23',
        'S23 Ultra',
        'S23+',
        'Z Flip4',
        'Z Fold4',
    ],
    // labels: [
    //     'Apple iPhone 14',
    //     'Apple iPhone 14 Plus',
    //     'Apple iPhone 14 Pro',
    //     'Apple iPhone 14 Pro Max',
    //     'Apple iPhone SE (2022)',
    //     'Google Pixel 6a',
    //     'Google Pixel 7',
    //     'Google Pixel 7 Pro',
    //     'Google Pixel 7a',
    //     'Samsung Galaxy A34 5G',
    //     'Samsung Galaxy A54 5G',
    //     'Samsung Galaxy S23',
    //     'Samsung Galaxy S23 Ultra',
    //     'Samsung Galaxy S23+',
    //     'Samsung Galaxy Z Flip4',
    //     'Samsung Galaxy Z Fold4',
    // ],
    datasets: [
        {
            label: 'DCD%',
            data: [100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            // pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'CB%',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 23, 29, 26, 32, 40],
            // fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            // pointBackgroundColor: 'rgb(54, 162, 235)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
        {
            label: 'TIB%',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 51, 54, 68, 60],
            // fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgb(255, 206, 86)',
            // pointBackgroundColor: 'rgb(255, 206, 86)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(255, 206, 86)',
        },
        {
            label: 'GC%',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 20, 20, 0, 0],
            // fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            // pointBackgroundColor: 'rgb(75, 192, 192)',
            // pointBorderColor: '#fff',
            // pointHoverBackgroundColor: '#fff',
            // pointHoverBorderColor: 'rgb(75, 192, 192)'
        }
    ]
};


new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 1,
            }
        },
        scales: {
            r: {
                pointLabels: {
                    font: {
                        weight: 'bold',
                    }
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '%';
                    },
                    max: 100,
                    beginAtZero: true,
                }
            }
        }
    }
});
