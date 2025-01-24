<template>
  <div id="chart">
    <apexchart type="area" height="242" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import ReservationsSources from "../configs/reservations";

export default {
  name: "GraphiqueRéservations",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    const reservationData = {};

    const statusMapping = {
      "confirmée": "Confirmed",
      "annulée": "Cancelled",
      "en attente": "Pending",
    };

    ReservationsSources.forEach((reservation) => {
      const date = new Date(reservation.created_at).toISOString().split("T")[0];
      const status = statusMapping[reservation.status.toLowerCase()] || "Unknown";

      if (!reservationData[date]) {
        reservationData[date] = {
          Confirmed: 0,
          Pending: 0,
          Cancelled: 0,
          Unknown: 0,
        };
      }
      reservationData[date][status] += 1;
    });

    const categories = Object.keys(reservationData).sort();

    const confirmed = categories.map((date) => reservationData[date].Confirmed || 0);
    const pending = categories.map((date) => reservationData[date].Pending || 0);
    const cancelled = categories.map((date) => reservationData[date].Cancelled || 0);

    return {
      series: [
        {
          name: "Confirmée",
          data: confirmed,
        },
        {
          name: "Annulée",
          data: pending,
        },
        {
          name: "En attente",
          data: cancelled,
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          stacked: true,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: categories,
        },
        tooltip: {
          x: {
            format: "dd/MM/yyyy",
          },
        },
        colors: [
          "#00E396",
          "#FEB019",
          "#FF4560",
        ],
      },
    };
  },
};
</script>
