export default function columnChart() {
// https://toastui-chart4.netlify.app/?path=/story/chart-column-general--positive
const el = document.getElementById('chart-bar');
const data = {
  categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
  series: [
    {
      name: 'Elviations',
      data: [5000, 3000, 6000, 3000, 6000, 4000],
    },
    {
      name: 'Junglectics',
      data: [8000, 1000, 7000, 2000, 5000, 3000],
    },
    {
      name: 'Amazonforce',
      data: [900, 6000, 1000, 9000, 3000, 1000],
    },
  ],
};
const options = {
  chart: { title: '손익, 재무상태', width: 900, height: 400 },
};

  const chart = toastui.Chart;
  chart.columnChart({el, data, options});
}
