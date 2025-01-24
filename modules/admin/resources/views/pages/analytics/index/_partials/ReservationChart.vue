<template>
    <div id="chart">
        <apexchart type="area" height="200" :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import reservations from "../configs/reservations";
import { Legend } from "chart.js";

export default {
    name: "ReservationChart",
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        const dateStatuses = {};

        reservations.forEach((reservation) => {
            const date = new Date(reservation.created_at).toISOString().split("T")[0];
            if (!dateStatuses[date]) {
                dateStatuses[date] = { Annulée: 0, Confirmée: 0, "En attente": 0 };
            }
            dateStatuses[date][reservation.status]++;
        });

        const categories = Object.keys(dateStatuses).sort();
        const annuléeData = categories.map((date) => dateStatuses[date].Annulée || 0);
        const confirméeData = categories.map((date) => dateStatuses[date].Confirmée || 0);
        const enAttenteData = categories.map((date) => dateStatuses[date]["En attente"] || 0);
        const totalReservationsData = categories.map((date) => 
            dateStatuses[date].Annulée + dateStatuses[date].Confirmée + dateStatuses[date]["En attente"]
        );

        return {
            series: [
                {
                    name: "Annulée",
                    data: annuléeData,
                },
                {
                    name: "Confirmée",
                    data: confirméeData,
                },
                {
                    name: "En attente",
                    data: enAttenteData,
                },
                {
                    name: "Total Reservations",
                    data: totalReservationsData,
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "area",
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
                colors: ["#FF4560", "#00E396", "#008FFB",  "#775DD0"],
                
            },
        };
    },
};
</script>
