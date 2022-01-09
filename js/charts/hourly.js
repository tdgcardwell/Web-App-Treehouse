const labels = [
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  'Noon',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  'Midnight',
  '1',
  '2',
  '3',
  '4',
  '5',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'Hourly',
    backgroundColor: 'rgb(117 119 191 / 52%)',
    borderColor: '#4d4c72',
    fill: true,
    data: [50, 85, 200, 250, 200, 250, 265, 183, 96, 130, 185, 200, 230, 250, 176, 90, 70, 50, 45, 25, 10, 5, 0, 0, 16],
  }]
};

const config = {
  type: 'line',
  data: data,
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

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
