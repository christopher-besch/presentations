
//n=10, used the bench script, 300 s means timeout
let benchData = [
    { label: "all", alltoall: 42.913, largeRGG: 7.788, memPlus: 18.023, smallRgg: 0.201, uk: 0.537},
    { label: "no squashing", largeRGG: 7.959, memPlus: 17.904, smallRgg: 0.199, uk: 0.537 },
    { label: "no heuristic", alltoall: 58.712, largeRGG: 8.848, memPlus: 18.083, smallRgg: 0.213, uk: 0.591 },
    { label: "no bfs", alltoall: 66.383, largeRGG: 7.582, memPlus: 17.676, smallRgg: 0.202, uk: 0.530 },
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
                    hidden: false,
                },
                {
                    label: 'largeRGG',
                    data: benchData.map(row => row.largeRGG),
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                    hidden: true,
                },
                {
                    label: 'memPlus',
                    data: benchData.map(row => row.memPlus),
                    backgroundColor: 'rgba(255, 206, 86, 0.8)',
                    hidden: true,
                },
                {
                    label: 'smallRgg',
                    data: benchData.map(row => row.smallRgg),
                    backgroundColor: 'rgba(0,238,153,0.73)',
                    hidden: true,
                },
                {
                    label: 'uk',
                    data: benchData.map(row => row.uk),
                    backgroundColor: 'rgba(19,63,238,0.8)',
                    hidden: true,
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
        },
    }
);
}
displayBenches();

async function displayBenches2() {
    new Chart(
        document.getElementById('optimizationsBench2'),
        {
            type: 'bar',
            data: {
                labels: benchData.map(row => row.label),
                datasets: [
                    {
                        label: 'alltoall',
                        data: benchData.map(row => row.alltoall),
                        backgroundColor: 'rgba(255, 99, 132, 0.8)',
                        hidden: true,
                    },
                    {
                        label: 'largeRGG',
                        data: benchData.map(row => row.largeRGG),
                        backgroundColor: 'rgba(54, 162, 235, 0.8)',
                        hidden: true,
                    },
                    {
                        label: 'memPlus',
                        data: benchData.map(row => row.memPlus),
                        backgroundColor: 'rgba(255, 206, 86, 0.8)',
                        hidden: false,
                    },
                    {
                        label: 'smallRgg',
                        data: benchData.map(row => row.smallRgg),
                        backgroundColor: 'rgba(0,238,153,0.73)',
                        hidden: true,
                    },
                    {
                        label: 'uk',
                        data: benchData.map(row => row.uk),
                        backgroundColor: 'rgba(19,63,238,0.8)',
                        hidden: true,
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
            },
        }
    );
}
displayBenches2();

//n=4, used the benchMemplus script, 300 s means timeout
let memplusBenchData = [
    { label: "all", memPlus: 0.444},
    { label: "no squashing", memPlus: 0.433},
    { label: "no heuristic", memPlus: 6.757},
    { label: "no bfs", memPlus: 0.440},
];
async function displayMemeplusBench() {
    new Chart(
        document.getElementById('customMemeplusBench'),
        {
            type: 'bar',
            data: {
                labels: memplusBenchData.map(row => row.label),
                datasets: [
                    {
                        label: 'memPlus',
                        data: memplusBenchData.map(row => row.memPlus),
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
            },
        }
    );
}
displayMemeplusBench();
