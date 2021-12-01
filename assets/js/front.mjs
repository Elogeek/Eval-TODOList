import "../css/style.css";
import {Container} from "./composants/Container.mjs";
import {TodoItemLine} from "./composants/TodoItemLine.mjs";
import Chart from "chart.js/auto";
import {getRelativePosition} from "chart.js/helpers";


Container.init(document.body);
TodoItemLine.init();

let divCanvas = document.createElement('div');
let canvas = document.createElement("canvas");
let btn = document.createElement("button");

divCanvas.id = "divGraph";
canvas.id = "myChart";
btn.id = "buttonGraph";
btn.innerHTML = " Voir les éléments supprimés";

document.body.append(divCanvas);
divCanvas.append(canvas);
document.querySelector('#container').append(btn);

btn.addEventListener("click", function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Eléments Supprimés de la TODO List"],
            datasets: [{
                label: 'Eléments supprimés',
                data: [parseInt(localStorage.getItem("deleted"))],
                backgroundColor: [
                    '#f1dcf7'
                ],
                borderColor: [
                    '#c7a0d2'
                ],
                borderWidth: 1
            }]
        },
        options: {
            onClick: (e) => {
                const canvasPosition = getRelativePosition(e, chart);

                // Substitute the appropriate scale IDs
                const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
            },
            responsive: true,
        }
    });

});

/**  When an mouse out of the canvas **/
divCanvas.addEventListener('mouseout',ev => {
    divCanvas.style.display = 'none';
})