export default function lineChart() {
  const el = document.getElementById('chart-timeline2');
  const data = {
    categories: [
      '01/01/2020',
      '02/01/2020',
      '03/01/2020',
      '04/01/2020',
      '05/01/2020',
      '06/01/2020',
      '07/01/2020',
      '08/01/2020',
      '09/01/2020',
      '10/01/2020',
      '11/01/2020',
      '12/01/2020',
    ],
    series: [
      {
        name: 'Seoul',
        data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.4, 13.9, 6.6, -0.6],
      },
    ],
  };
  const options = {
    chart: {title: '', width: '100%', height: 500},
    xAxis: {
      title: 'Month',
    },
    yAxis: {
      title: 'Amount',
    },
    tooltip: {
      formatter: (value) => `${value}°C`,
    },
    legend: {
      align: 'bottom',
    },
    plot: {
      lines: [
        {
          value: '02/01/2020',
          color: '#fa2828',
        },
      ],
    }
  };

  const chart = toastui.Chart;
  chart.lineChart({el, data, options});
}
