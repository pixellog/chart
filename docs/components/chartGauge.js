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
    chart: {title: '', width: 550, height: 500},
    circularAxis: {
      scale: {
        min: 0,
        // max: 100,
      },
      title: {text: 'km/h'},
    },
    series: {
      solid: true,
      dataLabels: {
        visible: true,
        offsetY: 0,
        formatter: (value) => `${value}%`
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

