import ReactApexChart from "react-apexcharts";

function BarChart({confidence}) {
    console.log(confidence);
 var h = confidence.split(",")[1];
 var s1 = confidence.split(",")[2];
 var s2 = confidence.split(",")[0];

  var barGraph = {
    series: [
      {
        name:"Healthy",
        data: [h],
      },
      {
        name:"Stage 1",
        data: [s1],
      },
      {
        name:"Stage 2",
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
