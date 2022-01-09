const labelsM = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const dataM = {
  labels: labelsM,
  datasets: [{
    label: 'Monthly',
    backgroundColor: 'rgb(117 119 191 / 52%)',
    borderColor: '#4d4c72',
    fill: true,
    data: [91230, 90749, 89240, 93060, 88910, 95602, 99090, 99402, 97030, 96620, 97055, 89723],
  }]
};

const configM = {
  type: 'line',
  data: dataM,
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

const myChartM = new Chart(
    document.getElementById('myChartM'),
    configM
  );
