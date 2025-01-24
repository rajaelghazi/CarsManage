<template>
  <div class="w-full h-full flex justify-center items-center" style="height: 425px;">
    <div id="chart">
      <apexchart type="donut" :options="chartOptions" :series="parkStatusSeries"></apexchart>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

const voituresReservees = 15;
const voituresEnMaintenance = 10;
const voituresDisponibles = 25;

const parkStatusSeries = ref([voituresReservees, voituresEnMaintenance, voituresDisponibles]);

const chartOptions = ref({
  chart: {
    type: 'donut',
  },
  colors: ['#f39c12', '#e74c3c', '#2ecc71'],
  labels: ['Réservées', 'En Maintenance', 'Disponibles'],
  legend: {
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '70%',
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
});
</script>

<style scoped>
#chart {
  max-width: 100%;
  margin: 0 auto;
}
</style>
