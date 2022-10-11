export default function gaugeChart() {
  const el = document.getElementById('chart-gauge');
  const data = {
    series: [
      {
        name: 'Speed',
        data: [80],
      },
    ],
  };
  const options = {
    chart: {title: '소셜분석', width: 550, height: 500},
    circularAxis: {
      scale: {
        min: 0,
        max: 100,
      },
      title: {text: 'km/h<div>기업평판지수</div>'},
    },
    series: {
      solid: true,
      dataLabels: {
        visible: true,
        offsetY: -30,
        formatter: (value) => `${value}% <div>기업평판지수</div>`
      },
    },
    theme: {
      circularAxis: {
        lineWidth: 0,
        strokeStyle: 'rgba(0, 0, 0, 0)',
        tick: {
          lineWidth: 0,
          strokeStyle: 'rgba(0, 0, 0, 0)',
        },
        label: {
          color: 'rgba(0, 0, 0, 0)',
        },
      },
      series: {
        dataLabels: {
          fontSize: 20,
          // fontFamily: 'Impact',
          fontWeight: 600,
          color: '#00a9ff',
          textBubble: {
            visible: false,
          },
        },
      },
    },
  };

  const chart = toastui.Chart;
  chart.gaugeChart({el, data, options});
}

