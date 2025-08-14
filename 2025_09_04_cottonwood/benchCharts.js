//Chart.plugins.register([ChartAnnotation]); // Global

//n=10, used the bench script, 300 s means timeout
let benchData = [
    { label: "all", alltoall: 46.908, largeRGG: 7.441, memPlus: 18.470, smallRgg: 0.202, uk: 0.547},
    { label: "no squashing", largeRGG: 7.476, memPlus: 17.906, smallRgg: 0.207, uk: 0.537 },
    { label: "no heuristic", alltoall: 59.906, largeRGG: 8.618, memPlus: 18.278, smallRgg: 0.223, uk: 0.584 },  //ToDo: redo bench
    { label: "no bfs", alltoall: 67.724, largeRGG: 7.539, memPlus: 17.769, smallRgg: 0.201, uk: 0.542 },
];

async function displayBenches() {
new Chart(
    document.getElementById('optimizationsBench'),
    {
        type: 'bar',
        data: {
            labels: benchData.map(row => row.label),
            datasets: [
                {
                    label: 'alltoall',
                    data: benchData.map(row => row.alltoall),
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                },
                {
                    label: 'largeRGG',
                    data: benchData.map(row => row.largeRGG),
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                },
                {
                    label: 'memPlus',
                    data: benchData.map(row => row.memPlus),
                    backgroundColor: 'rgba(255, 206, 86, 0.8)',
                },
                {
                    label: 'smallRgg',
                    data: benchData.map(row => row.smallRgg),
                    backgroundColor: 'rgba(0,238,153,0.73)',
                },
                {
                    label: 'uk',
                    data: benchData.map(row => row.uk),
                    backgroundColor: 'rgba(19,63,238,0.8)',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
            scales: {
                x: {
                    title: {
                        display: false,
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Time (s)'
                    },
                    beginAtZero: true
                }
            },
            annotation: {
                annotations: [{
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y-axis-0',
                    value: 5,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 4,
                    label: {
                        enabled: true,
                        content: 'Test label'
                    }
                }]
            }
        },
    }
);
}
displayBenches();

async function displayMemeplusBench() {
    new Chart(
        document.getElementById('customMemeplusBench'),
        {
            type: 'bar',
            data: {
                labels: benchData.map(row => row.label),
                datasets: [
                    {
                        label: 'memPlus',
                        data: benchData.map(row => row.memPlus),
                        backgroundColor: 'rgba(255, 206, 86, 0.8)',
                    },
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: false,
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Time (s)'
                        },
                        beginAtZero: true
                    }
                },
                annotation: {
                    annotations: [{
                        type: 'line',
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: 5,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 4,
                        label: {
                            enabled: true,
                            content: 'Test label'
                        }
                    }]
                }
            },
        }
    );
}
displayMemeplusBench();
