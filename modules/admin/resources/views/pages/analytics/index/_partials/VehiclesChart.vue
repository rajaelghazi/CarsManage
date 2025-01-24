<template>
    <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import vehicles from "../configs/vehicles";

export default {
    name: "VehiclesChart",
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        const reservationData = {};

        vehicles.forEach((vehicle) => {
            vehicle.reservationHistory.forEach((reservation) => {
                const date = new Date(reservation.date).toISOString().split("T")[0];
                if (!reservationData[date]) {
                    reservationData[date] = { Confirmée: 0, Annulée: 0 };
                }
                reservationData[date][reservation.status]++;
            });
        });

        const categories = Object.keys(reservationData).sort();
        const confirméeData = categories.map((date) => reservationData[date].Confirmée || 0);
        const annuléeData = categories.map((date) => reservationData[date].Annulée || 0);
        const totalData = categories.map(
            (date) => (reservationData[date].Confirmée || 0) + (reservationData[date].Annulée || 0)
        );

        return {
            series: [
                {
                    name: "Confirmées",
                    data: confirméeData,
                },
                {
                    name: "Annulées",
                    data: annuléeData,
                },
                {
                    name: "Total",
                    data: totalData,
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "area",
                    stacked: false,
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
                colors: ["#00E396", "#FF4560", "#FEB019"],
            },
        };
    },
};
</script>
