$(document).ready(function () {

    //--- Categorical Expenses---
    var ctx = document.getElementById("categoricalExpenses");
    var categoricalExpenses = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Food & Groceries", "Home & Utilities", "Personal & Medical", "Groceries", "Transport & Auto", "Children"],
            datasets: [{
                backgroundColor: '#3279bb',
                label: 'Debit',
                data: [12, 19, 3, 10, 15, 10]
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }
                }]
            }
        }
    });

    function addData(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    function addBenchMark(chart, label, color, data) {
        chart.data.datasets.push({
            label: label,
            backgroundColor: color,
            data: data
        });
        chart.update();
    }

    // inserting the new dataset after 1 seconds
    setTimeout(function () {
        addData(categoricalExpenses, 'Credit', '#00abda', [16, 14, 8, 14, 11, 9]);
    }, 1000);
    //----
});