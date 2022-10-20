// 주주현황
function pieChartStock() {
// https://toastui-chart4.netlify.app/?path=/story/chart-columnline--secondary-y-axis
  const data = {
    categories: ['Browser'],
    series: [
      {
        name: '김항기 외2',
        data: 43,
      },
      {
        name: 'DSC투자자문',
        data: 12,
      },
      {
        name: '카카오',
        data: 12,
      },
      {
        name: '인베스트',
        data: 13,
      },
      {
        name: '신한벤처투자',
        data: 22,
      },
    ],
  };
  const options = {
    chart: {title: '', width: 600, height: 400},
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
  const el = document.getElementById('stock');
  chart.pieChart({el, data, options});
}
