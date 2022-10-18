// 타임라인
export function lineChartTimeline() {
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
  const options = {
    chart: {title: '', width: '100%', height: 500},
    xAxis: {
      title: '',
    },
    yAxis: {
      title: '',
    },
    tooltip: {
      transition: 'transform .1s ease-in',
      template: (model, defaultTooltipTemplate) => {
        const {body, header} = defaultTooltipTemplate;
        return `<div style="width: 140px; padding: 5px; color:#000;">
          ${model.category} ${body}
          </div>`
      },
    },
    legend: {
      // fontFamily:'NanumSquareNeo',
      align: 'bottom',
    },
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
          color: '#000',
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
      yAxis: [
        {
          title: {
            // fontSize: 17,
            // color: '#03C03C'
          },
          label: {
            fontFamily:'NanumSquareNeo',
            fontSize: 11,
            color: '#333'
          },
          width: 1,
          color: '#333'
        },
        {
          title: {},
          label: {},
          width: 1,
          color: '#ddd'
        }
      ]
    }
  };

  const chart = toastui.Chart;
  const el = document.getElementById('timeline');
  chart.lineChart({el, data, options});
}
// 직전년도 현금보유.입출금 현황
export function lineChartPrevious() {
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
  const options = {
    chart: {title: '', width: '100%', height: 500},
    xAxis: {
      title: '',
    },
    yAxis: {
      title: '',
    },
    tooltip: {
      transition: 'transform .1s ease-in',
      template: (model, defaultTooltipTemplate) => {
        const {body, header} = defaultTooltipTemplate;
        return `<div style="width: 140px; padding: 5px; color:#000;">
          ${model.category} ${body}
          </div>`
      },
    },
    legend: {
      // fontFamily:'NanumSquareNeo',
      align: 'bottom',
    },
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
          color: '#000',
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
      yAxis: [
        {
          title: {
            // fontSize: 17,
            // color: '#03C03C'
          },
          label: {
            fontFamily:'NanumSquareNeo',
            fontSize: 11,
            color: '#333'
          },
          width: 1,
          color: '#333'
        },
        {
          title: {},
          label: {},
          width: 1,
          color: '#ddd'
        }
      ]
    }
  };

  const chart = toastui.Chart;
  const el = document.getElementById('previous'); // 매출.지출.손익 현황
  chart.lineChart({el, data, options});
}
// 당해년도 현금 보유 현황
export function lineChartCurrently() {
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
  const options = {
    chart: {title: '', width: '100%', height: 500},
    xAxis: {
      title: '',
    },
    yAxis: {
      title: '',
    },
    tooltip: {
      transition: 'transform .1s ease-in',
      template: (model, defaultTooltipTemplate) => {
        const {body, header} = defaultTooltipTemplate;
        return `<div style="width: 140px; padding: 5px; color:#000;">
          ${model.category} ${body}
          </div>`
      },
    },
    legend: {
      // fontFamily:'NanumSquareNeo',
      align: 'bottom',
    },
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
          color: '#000',
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
      yAxis: [
        {
          title: {
            // fontSize: 17,
            // color: '#03C03C'
          },
          label: {
            fontFamily:'NanumSquareNeo',
            fontSize: 11,
            color: '#333'
          },
          width: 1,
          color: '#333'
        },
        {
          title: {},
          label: {},
          width: 1,
          color: '#ddd'
        }
      ]
    }
  };

  const chart = toastui.Chart;
  const el = document.getElementById('currently'); // 당해년도 현금 보유 현황
  chart.lineChart({el, data, options});
}
// 런웨이
export function lineChartRunway() {
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
  const options = {
    chart: {title: '', width: '100%', height: 500},
    xAxis: {
      title: '',
    },
    yAxis: {
      title: '',
    },
    tooltip: {
      transition: 'transform .1s ease-in',
      template: (model, defaultTooltipTemplate) => {
        const {body, header} = defaultTooltipTemplate;
        return `<div style="width: 140px; padding: 5px; color:#000;">
          ${model.category} ${body}
          </div>`
      },
    },
    legend: {
      // fontFamily:'NanumSquareNeo',
      align: 'bottom',
    },
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
          color: '#000',
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
      yAxis: [
        {
          title: {
            // fontSize: 17,
            // color: '#03C03C'
          },
          label: {
            fontFamily:'NanumSquareNeo',
            fontSize: 11,
            color: '#333'
          },
          width: 1,
          color: '#333'
        },
        {
          title: {},
          label: {},
          width: 1,
          color: '#ddd'
        }
      ]
    }
  };

  const chart = toastui.Chart;
  const el = document.getElementById('runway'); // 런웨이
  chart.lineChart({el, data, options});
}
// 고용.인건비.생산성 현황
export function lineChartProductivity() {
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
  const el = document.getElementById('productivity');
  chart.lineChart({el, data, options});
}
