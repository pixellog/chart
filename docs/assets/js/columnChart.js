function columnChartProfit() {
// https://toastui-chart4.netlify.app/?path=/story/chart-column-general--positive-and-negative

  const data = {
    categories: ['2022.1', '2022.2', '2022.3', '2022.4', '2022.5', '2022.6', '2022.7', '2022.8', '2022.9', '2022.10'],
    series: [
      {
        name: '지출',
        data: [40000, 50000, 30000, 50000, 70000, 60000, 40000, 50000, 30000, 40000],
      },
      {
        name: '매출',
        data: [70000, 80000, 20000, 70000, 25000, 70000, 70000, 80000, 20000, 40000],
      },
      {
        name: '손익',
        data: [-5000, -4000, -24000, -6000, 1300, -4000, -5000, -4000, -4000, 3000],
      },
    ],
  };
  const options = {
    chart: {
      title: '',
      width: '100%',
      height: 400
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
  };

  const chart = toastui.Chart;
  const el = document.getElementById('profit');
  chart.columnChart({el, data, options});
}

function columnChartCash() {
// https://toastui-chart4.netlify.app/?path=/story/chart-column-general--positive-and-negative
  const data = {
    categories: ['2022.1', '2022.2', '2022.3', '2022.4', '2022.5', '2022.6', '2022.7', '2022.8', '2022.9', '2022.10'],
    series: [
      {
        name: '매출',
        data: [40000, 50000, 30000, 50000, 70000, 60000, 40000, 50000, 30000, 40000],
      },
      {
        name: '대출',
        data: [70000, 80000, 20000, 70000, 25000, 70000, 70000, 80000, 20000, 40000],
      },
      {
        name: '투자',
        data: [-5000, -4000, -24000, -6000, 1300, -4000, -5000, -4000, -4000, 3000],
      },
      {
        name: '기타',
        data: [40000, 50000, 30000, 50000, 70000, 60000, 40000, 50000, 30000, 40000],
      },
      {
        name: '인건비',
        data: [70000, 80000, 20000, 70000, 25000, 70000, 70000, 80000, 20000, 40000],
      },
      {
        name: '임대료',
        data: [-5000, -4000, -24000, -6000, 1300, -4000, -5000, -4000, -4000, 3000],
      },
      {
        name: '카드비용',
        data: [4000, 5000, 3000, 5000, 7000, 6000, 400, 5000, 3000, 4000],
      },
      {
        name: '손익',
        data: [70000, 80000, 20000, 70000, 25000, 70000, 70000, 80000, 20000, 4000],
      },
    ],
  };
  const options = {
    chart: {
      title: '',
      width: '100%',
      height: 400
    },
    legend: {
      align: 'bottom',
    },
    series: {
      stack: true
    },
    theme: {
      plot: {
        horizontal: {
          lineColor: 'rgba(0, 0, 0, 0)',
        },
      },
    },
  };

  const chart = toastui.Chart;
  const el = document.getElementById('cash');
  chart.columnChart({el, data, options});
}
