<template>
    <div id="chart">
        <apexchart type="area" height="242" :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import Staffs from "../configs/Staffs";

export default {
    name: "StaffsChart",
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        const reservationData = {};

        Staffs.forEach((staff) => {
            staff.reservationHistory.forEach((reservation) => {
                const date = new Date(staff.created_at).toISOString().split("T")[0];
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
                colors: ["#00E396", "#FF4560", "#FEB019"]
            },
        };
    },
};
</script>
