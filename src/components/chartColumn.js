export default function columnChart() {
// https://toastui-chart4.netlify.app/?path=/story/chart-column-general--positive-and-negative
  const el = document.getElementById('chart-column');
  const data = {
    categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    series: [
      {
        name: 'Budget',
        data: [4000, 5000, 3000, 5000, 7000, 6000],
      },
      {
        name: 'Income',
        data: [7000, 8000, 2000, 7000, 2500, 7000],
      },
      {
        name: 'Expenses',
        data: [-5000, -4000, -4000, -6000, -3000, -4000],
      },
      {
        name: 'Debt',
        data: [-3000, -6000, -3000, -5000, -2000, -1500],
      },
    ],
  };
  const options = {
    chart: {title: 'chart-column', width: 900, height: 400},
  };

  const chart = toastui.Chart;
  chart.columnChart({el, data, options});
}

