function initChart(){
  // 타임라인
  chartTimeline();
  // 고용.인건비.생산성 현황
  chartProductivity();
  // 주주현황
  chartStock();
  // 당해년도 현금보유현황
  chartCurrently();
  // 매출.지출.손익 현황
  chartProfit();
  // Cash In/Out
  chartCash();
  // 런웨이
  chartRunway();
}

const theme = {
  chart: {
    title: '',
    width: '100%',
    height: 400
  },
  xAxis: {
    title: '',
  },
  yAxis: {
    title: '',
  },
  tooltip: {
    formatter: (value) => `${value}`,
  },
  legend: {
    // fontFamily:'NanumSquareNeo',
    align: 'bottom',
  },
  theme: {
    tooltip: {
      // background: 'rgba(0, 0, 0, 0)',
      // borderColor: '#f00',
      borderWidth: 2,
      borderRadius: 0,
      // borderStyle: 'double',
      header: {
        fontSize: 12,
      },
      body: {
        fontSize: 12,
      }
    },
    plot: {
      // vertical: {
      //   lineColor: 'rgba(60, 80, 180, 0.3)',
      //   lineWidth: 5,
      //   dashSegments: [5, 20],
      // },
      horizontal: {
        lineColor: 'rgba(0, 0, 0, 0)',
      },
      // backgroundColor: 'rgba(60, 80, 180, 0.1)'
    },
    xAxis: {
      title: {},
      label: {},
      width: 1,
      color: '#333'
    },
  }
};

// 타임라인
function chartTimeline() {
  const data = {
    categories: [
      '2019-11',
      '2020-03',
      '2020-07',
      '2020-11',
      '2021-03',
      '2021-07',
      '2021-11',
      '2022-03',
      '2022-07',
    ],
    series: [
      {
        name: '런웨이',
        data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.2],
      },
      {
        name: '월별손익',
        data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0],
      },
      {
        name: '고용인원',
        data: [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2],
      },
      {
        name: '투자유치',
        data: [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9],
      },
    ],
  };
  const style = {
    plot: {
      lines: [
        {
          value: '2020-11',
          color: '#f00',
        },
        {
          value: '2021-03',
          color: '#f00',
        },
      ],
    }
  }

  const options = Object.assign({}, theme, style)

  const chart = toastui.Chart;
  const el = document.getElementById('timeline');
  chart.lineChart({el, data, options});
}

// 고용.인건비.생산성 현황
function chartProductivity() {
  const data = {
    categories: [
      '08/2019',
      '12/2019',
      '04/2020',
      '08/2020',
      '12/2020',
      '04/2021',
      '08/2021',
      '12/2021',
      '04/2022',
      '08/2022',
    ],
    series: {
      column: [
        {
          name: '입사자수',
          data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.2, 8.4],
        },
        {
          name: '퇴사자수',
          data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 8.4],
        },
        {
          name: '총인건비(K)',
          data: [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 8.4],
        },
        {
          name: '평균인건비(K)',
          data: [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 8.4],
        },
        {
          name: '인당생산성(K)',
          data: [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9, 8.4],
        },
      ],
      line: [
        {
          name: '현재인원수',
          data: [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2, 8.4],
        },
      ]
    }
  };
  const style = {
    chart: {title: '', width: '100%', height: 500},
    xAxis: {
      title: 'Month',
    },
    yAxis: [ // https://github.com/nhn/tui.chart/blob/main/docs/ko/common-axes.md
      {title: 'Start'},
      {title: 'End'}
    ],
  };

  const options = Object.assign({}, theme, style)

  const chart = toastui.Chart;
  const el = document.getElementById('productivity');
  chart.columnLineChart({el, data, options});
}

// 주주현황
function chartStock() {
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
    chart: {
      title: {
        text: '2021년 기준',
        fontSize: 12,
        offsetX: -54,
        offsetY: 185,
        align: 'center'
      },
      width: 600, height: 400,
    },
    series: {
      radiusRange: {
        inner: '50%',
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

// 당해년도 현금 보유 현황
function chartCurrently() {
  const data = {
    categories: [
      '2019-11',
      '2020-03',
      '2020-07',
      '2020-11',
      '2021-03',
      '2021-07',
      '2021-11',
      '2022-03',
      '2022-07',
    ],
    series: [
      {
        name: '런웨이',
        data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.2],
      },
      {
        name: '월별손익',
        data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0],
      },
      {
        name: '고용인원',
        data: [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2],
      },
      {
        name: '투자유치',
        data: [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9],
      },
    ],
  };
  const style = {};
  const options = Object.assign({}, theme, style)

  const chart = toastui.Chart;
  const el = document.getElementById('currently'); // 당해년도 현금 보유 현황
  chart.lineChart({el, data, options});
}

// 매출.지출.손익 현황
function chartProfit() {
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

  const style = {};
  const options = Object.assign({}, theme, style)

  const chart = toastui.Chart;
  const el = document.getElementById('profit');
  chart.columnChart({el, data, options});
}

// Cash In/Out
function chartCash() {
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

  const style = {
    series: {
      stack: true
    },
  };
  const options = Object.assign({}, theme, style)

  const chart = toastui.Chart;
  const el = document.getElementById('cash');
  chart.columnChart({el, data, options});
}

// 런웨이
function chartRunway() {
  const data = {
    categories: [
      '2019-11',
      '2020-03',
      '2020-07',
      '2020-11',
      '2021-03',
      '2021-07',
      '2021-11',
      '2022-03',
      '2022-07',
    ],
    series: [
      {
        name: '런웨이',
        data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.2],
      },
      {
        name: '월별손익',
        data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0],
      },
      {
        name: '고용인원',
        data: [22.1, 22.0, 20.9, 18.3, 15.2, 12.8, 11.8, 13.0, 15.2],
      },
      {
        name: '투자유치',
        data: [-10.3, -9.1, -4.1, 4.4, 12.2, 16.3, 18.5, 16.7, 10.9],
      },
    ],
  };
  const style = {};
  const options = Object.assign({}, theme, style)

  const chart = toastui.Chart;
  const el = document.getElementById('runway'); // 런웨이
  chart.lineChart({el, data, options});
}

