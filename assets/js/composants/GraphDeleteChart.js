import Chart from "chart.js/auto";

class GraphDeleteChart {

    /**
     * Constructor
     */
    constructor() {
        this.ctx = document.createElement("canvas");
        this.div = document.createElement("div");
    }

    /**
     * Init the chart
     * @param container
     */
    init(container) {
        this.div.style.cssText = `
            height: 700px;
            width: 50%;
            margin: 2rem auto
        `;
        const myChart = new Chart(this.ctx, {
            type: 'bar',
            data: {
                labels: ["Lien delete"],
                datasets: [{
                    label: 'Nombre de delete',
                    data: [parseInt(localStorage.getItem("deleteItem"))],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        this.div.appendChild(this.ctx)
        container.appendChild(this.div);
    }
}

export {GraphDeleteChart};