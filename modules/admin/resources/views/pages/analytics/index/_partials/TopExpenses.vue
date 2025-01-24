<template>
  <BaseSection title="Top Dépenses">

    <div class="flex flex-col gap-5">
      <div class="flex lg:flex-row flex-col gap-5">

        <div class="lg:w-1/2 w-full">
          <BaseCard title="Aperçu des Dépenses" class="w-full">
            <ExpensesChart />
          </BaseCard>
        </div>

        <div class="lg:w-1/2 w-full flex flex-col gap-5">

          <div class="w-full mt-4">
            <BaseDatatable title="Top Dépenses" :value="expenseTypes" data-key="id" class="-mt-4">
              <template #default>
                <Column field="type" header="Type de Dépense">
                  <template #body="{ data }">
                    <div>
                      <strong class="dark:text-zinc-300">{{ data.type }}</strong>
                    </div>
                  </template>
                </Column>

                <Column header="Dépenses">
                  <template #body="{ data }">
                    <div>
                      {{ data.count }}
                    </div>
                  </template>
                </Column>

                <Column header="Montant Total">
                  <template #body="{ data }">
                    <div>
                      {{ data.totalAmount }} Dhs
                    </div>
                  </template>
                </Column>
              </template>

              <template #empty>
                <EmptyState icon="fi-rr-wallet" title="Aucune Dépense"
                  description="Commencez à ajouter des dépenses pour voir les résultats">
                </EmptyState>
              </template>
            </BaseDatatable>
          </div>

        </div>
      </div>
    </div>

  </BaseSection>
</template>

<script setup>
import { ref } from 'vue';
import { MainLayout } from '@admin/views/layouts';
import ExpensesChart from "./ExpensesChart.vue";
import ExpensesData from "../configs/expenses";

const expenseTypes = ref([
  {
    type: "Frais de Location de Véhicule",
    count: ExpensesData.filter(expense => expense.expense_type === "Vehicle Rental Fee").length,
    totalAmount: ExpensesData.filter(expense => expense.expense_type === "Vehicle Rental Fee")
      .reduce((acc, expense) => acc + expense.amount, 0).toFixed(2),
  },
  {
    type: "Frais de Carburant",
    count: ExpensesData.filter(expense => expense.expense_type === "Fuel Charges").length,
    totalAmount: ExpensesData.filter(expense => expense.expense_type === "Fuel Charges")
      .reduce((acc, expense) => acc + expense.amount, 0).toFixed(2),
  },
  {
    type: "Prime d'Assurance",
    count: ExpensesData.filter(expense => expense.expense_type === "Insurance Premium").length,
    totalAmount: ExpensesData.filter(expense => expense.expense_type === "Insurance Premium")
      .reduce((acc, expense) => acc + expense.amount, 0).toFixed(2),
  },
  {
    type: "Entretien et Réparations",
    count: ExpensesData.filter(expense => expense.expense_type === "Maintenance and Repairs").length,
    totalAmount: ExpensesData.filter(expense => expense.expense_type === "Maintenance and Repairs")
      .reduce((acc, expense) => acc + expense.amount, 0).toFixed(2),
  },
  {
    type: "Frais de Conducteur Supplémentaire",
    count: ExpensesData.filter(expense => expense.expense_type === "Additional Driver Fee").length,
    totalAmount: ExpensesData.filter(expense => expense.expense_type === "Additional Driver Fee")
      .reduce((acc, expense) => acc + expense.amount, 0).toFixed(2),
  },
]);

defineOptions({ layout: MainLayout });
</script>