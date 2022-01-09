const labelsW = [
  'Week One',
  'Week Two',
  'Week Three',
  'Week Four',
  'Week Five',
];
const dataW = {
  labels: labelsW,
  datasets: [{
    label: 'Weekly',
    backgroundColor: 'rgb(117 119 191 / 52%)',
    borderColor: '#4d4c72',
    fill: true,
    data: [15600, 20000, 18000, 20500, 13200],
  }]
};

const configW = {
  type: 'line',
  data: dataW,
  options: {
    elements: {
      line: {
        borderWidth: 0,
        tension: (.17,.67,.83,.67)
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

const myChartW = new Chart(
    document.getElementById('myChartW'),
    configW
  );
