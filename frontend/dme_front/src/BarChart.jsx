import ReactApexChart from "react-apexcharts";

function BarChart({ h, s1, s2 }) {
  var barGraph = {
    series: [
      {
        data: [h],
      },
      {
        data: [s1],
      },
      {
        data: [s2],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ["DME"],
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={barGraph.options}
        series={barGraph.series}
        type="bar"
        height={430}
      />
    </div>
  );
}

export default BarChart;
