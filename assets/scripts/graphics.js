const Graphics = {
  ctx: document.getElementById("myChart").getContext("2d"),
  chart: {},
  data: {
    labels: [0],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#3989c7",
        borderColor: "#3989c7",
        data: [0, 100],
      },
    ],
  },
  execute: () => {
    const config = {
      type: "line",
      data: Graphics.data,
      options: {},
    };

    Graphics.chart = new Chart(Graphics.ctx, config);
  },
  update: (performance) => {
    Graphics.data.labels.push(Math.floor(performance));
    Graphics.data.datasets[0].data.push(performance.toFixed(0));
    const config = {
      type: "line",
      data: Graphics.data,
      options: {},
    };
    console.log(Graphics.chart.destroy());

    Graphics.chart = new Chart(Graphics.ctx, config);
  },
};

export default Graphics;
