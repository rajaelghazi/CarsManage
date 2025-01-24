<template>
  <div id="chart">
    <apexchart type="bar" height="378" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "GraphiqueRevenusVsDepenses",
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    incomeData: {
      type: Array,
      required: true,
    },
    expenseData: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      series: [
        {
          name: "Revenus",
          data: this.incomeData,
        },
        {
          name: "Dépenses",
          data: this.expenseData,
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 390,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            borderRadius: 5,
            borderRadiusApplication: "end",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: this.categories,
        },
        yaxis: {
          title: {
            text: "Dirhams",
          },
        },
        fill: {
          opacity: 1,
          colors: ["#20b362", "#dc3545"],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return  val +"Dhs " ;
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
#chart {
  max-width: 100%;
  margin: 0 auto;
}
</style>
