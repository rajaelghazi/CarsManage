<template>
  <div id="chart">
    <apexchart type="area" height="242" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import Expenses from "../configs/Expenses";

export default {
  name: "GraphiqueDépenses",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    const expenseData = {};

    Expenses.forEach((expense) => {
      const date = new Date(expense.date).toISOString().split("T")[0];
      if (!expenseData[date]) {
        expenseData[date] = {};
      }
      if (!expenseData[date][expense.expense_type]) {
        expenseData[date][expense.expense_type] = 0;
      }
      expenseData[date][expense.expense_type] += expense.amount;
    });

    const categories = Object.keys(expenseData).sort();
    const fraisLocationVéhiculeData = categories.map((date) =>
      (expenseData[date]["Vehicle Rental Fee"] || 0).toFixed(2)
    );
    const fraisCarburantData = categories.map((date) =>
      (expenseData[date]["Fuel Charges"] || 0).toFixed(2)
    );
    const primeAssuranceData = categories.map((date) =>
      (expenseData[date]["Insurance Premium"] || 0).toFixed(2)
    );
    const entretienRéparationsData = categories.map((date) =>
      (expenseData[date]["Maintenance and Repairs"] || 0).toFixed(2)
    );
    const fraisConducteurSupplémentaireData = categories.map((date) =>
      (expenseData[date]["Additional Driver Fee"] || 0).toFixed(2)
    );

    return {
      series: [
        {
          name: "Coût de Location de Véhicule",
          data: fraisLocationVéhiculeData,
        },
        {
          name: "Coût du Carburant",
          data: fraisCarburantData,
        },
        {
          name: "Coût de l'Assurance",
          data: primeAssuranceData,
        },
        {
          name: "Coût d'Entretien et de Réparations",
          data: entretienRéparationsData,
        },
        {
          name: "Coût du Conducteur Supplémentaire",
          data: fraisConducteurSupplémentaireData,
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
        colors: ["#00E396", "#FF4560", "#FEB019", "#775DD0", "#546E7A"],
      },
    };
  },
};
</script>
