$(document).ready(function () {
    var config = {
        type: 'doughnut',
        data: {
            datasets: [
                /* Outer doughnut data starts*/
                {
                    data: [10, 20, 30, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    label: 'Personal'
                },
                /* Outer doughnut data ends*/
                /* Inner doughnut data starts*/
                {
                    data: [45, 25, 11, 20],
                    backgroundColor: [
                        '#16a085',
                        '#27ae60',
                        '#2980b9',
                        '#8e44ad',
                    ],
                    label: 'Benchmark'
                }
                /* Inner doughnut data ends*/
            ],
            labels: [
                "Food & Groceries",
                "Home & Utilities",
                "Personal & Medical",
                "Children"
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                // Return the HTML string here.
                return `
                   <table class="table table-borderless weekly-budget-table">
                        <tbody>
                            <tr>
                                <td style="background-color:#ff6384;width:5px;padding:1px">&nbsp;</td>
                                <td>Food & Groceries</td>
                                <td style="background-color:#16a085;width:5px;padding:1px">&nbsp;</td>
                                <td>Food & Groceries</td>
                            </tr>
                            <tr>
                                <td style="background-color:#36a2eb;width:5px;padding:1px">&nbsp;</td>
                                <td>Home & Utilities</td>
                                <td style="background-color:#27ae60;width:5px;padding:1px">&nbsp;</td>
                                <td>Home & Utilities</td>
                            </tr>
                            <tr>
                                <td style="background-color:#ffce56;width:5px;padding:1px">&nbsp;</td>
                                <td>Personal & Medical</td>
                                <td style="background-color:#2980b9;width:5px;padding:1px">&nbsp;</td>
                                <td>Personal & Medical</td>
                            </tr>
                            <tr>
                                <td style="background-color:#9966ff;width:5px;padding:1px">&nbsp;</td>
                                <td>Children</td>
                                <td style="background-color:#8e44ad;width:5px;padding:1px">&nbsp;</td>
                                <td>Children</td>
                            </tr>
                        </tbody>
                   </table>
                `
                // console.log(chart.data.datasets);
                // var text = [];
                // text.push('<ul class="' + chart.id + '-legend">');
                // for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                //     text.push('<li><span id="legend-' + i + '-item" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"   onclick="updateDataset(event, ' + '\'' + i + '\'' + ')">');
                //     if (chart.data.labels[i]) {
                //         text.push(chart.data.labels[i]);
                //     }
                //     text.push('</span></li>');
                // }
                // text.push('</ul>');
                // return text.join("");
            },
            title: {
                display: true,
                text: 'Total Weekly spend $800'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            layout: {
                padding: {
                    left: 50,
                    top: 0,
                }
            },
            tooltips: {
                callbacks: {
                    label: function (item, data) {
                        console.log(data.labels, item);
                        return data.datasets[item.datasetIndex].label + ": " + data.labels[item.index] + ": " + data.datasets[item.datasetIndex].data[item.index];
                    }
                }
            }
        }
    };


    window.onload = function () {
        var ctx = document.getElementById("myChart")
            .getContext("2d");
        window.myDoughnut = new Chart(ctx, config);
        $("#do_legend").html(window.myDoughnut.generateLegend());
    };
});