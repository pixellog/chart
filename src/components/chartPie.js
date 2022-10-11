export default function pieChart() {
// https://toastui-chart4.netlify.app/?path=/story/chart-columnline--secondary-y-axis
  const el = document.getElementById('chart-pie');
  const data = {
    categories: ['Browser'],
    series: [
      {
        name: 'Chrome',
        data: 46.02,
      },
      {
        name: 'IE',
        data: 20.47,
      },
      {
        name: 'Firefox',
        data: 17.71,
      },
      {
        name: 'Safari',
        data: 5.45,
      },
      {
        name: 'Opera',
        data: 3.1,
      },
      {
        name: 'Etc',
        data: 7.25,
      },
    ],
  };
  const options = {
    chart: {title: '소비자 유형분석 - 가족구성 및 소득', width: 600, height: 400},
    series: {
      radiusRange: {
        inner: '40%',
        outer: '100%',
      },
      dataLabels: {
        visible: true,
        anchor: 'outer',
        pieSeriesName: {
          visible: true,
          anchor: 'outer',
        },
      },
    },
  };

  const chart = toastui.Chart;
  chart.pieChart({el, data, options});
}
