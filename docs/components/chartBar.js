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
    chart: {
      title: '',
      width: '100%', height: 400
    },
    legend: {
      align: 'bottom',
    },
    theme: {
      plot: {
        horizontal: {
          lineColor: 'rgba(0, 0, 0, 0)',
        },
      },
    },
    xAxis: { // https://github.com/nhn/tui.chart/blob/main/docs/ko/common-axes.md
      pointOnColumn: false,
      label: {
        formatter: (value) => {
          return `${value}`;
        },
      },
      title: {
        // text: '업데이트 : 2022-09-26',
        offsetX: 0,
        offsetY: 0,
      }
    },
    yAxis: [
      // {title: 'Temperature (Celsius)'},
      {
        title: 'Percent (%)',
      },
    ],
  };

  const chart = toastui.Chart;
  chart.columnChart({el, data, options});
}
