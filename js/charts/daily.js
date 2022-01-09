const labelsD = [
  'Sun',
  'M',
  'T',
  'W',
  'Th',
  'F',
  'Sat',
];
const dataD = {
  labels: labelsD,
  datasets: [{
    label: 'Daily',
    backgroundColor: 'rgb(117 119 191 / 52%)',
    borderColor: '#4d4c72',
    fill: true,
    data: [1000, 2000, 2300, 3000, 2500, 3200, 1800],
  }]
};

const configD = {
  type: 'line',
  data: dataD,
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

const myChartD = new Chart(
    document.getElementById('myChartD'),
    configD
  );
