<template>
	<Section class="space-y-5 max-w-7xl mx-auto">
		<BaseCard>
			<div class="flex flex-col md:flex-row gap-2 md:gap-0 md:items-center items-start justify-between">
				<div>
					<h1 class="font-bold text-xl">{{ $t('Bienvenue dans le tableau de bord de location de voitures') }}
					</h1>
					<p>{{ $t('Voici les statistiques de votre entreprise') }}</p>
				</div>
				<DatePicker v-model="selectedDateRange" selectionMode="range" :manualInput="false" showButtonBar
					showIcon iconDisplay="input" />
			</div>
		</BaseCard>

		<div class="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-5 items-center">
			<StatCard label="Reservations" :value="allReservations" icon="fi fi-rr-calendar" />
			<StatCard label="Sales" :value="sales" amount="Dhs" icon="fi fi-rr-benefit-porcent" />
			<StatCard label="Expenses" :value="expenses" amount="Dhs" icon="fi fi-rr-wallet" />
			<StatCard label="Profit" :value="profit" amount="Dhs" icon="fi fi-rr-money" />
		</div>

		<div class="flex lg:flex-row flex-col gap-5 w-full h-full">

			<div class="lg:w-2/3 w-full flex flex-col h-full">
				<BaseCard title="Réservations à venir">
					<DataTable :value="reservations" :paginator="true" :rows="5" :responsive="true">
						<Column field="id" header="ID" />

						<Column header="Véhicule">
							<template #body="{ data }">
								<div>
									<div class="dark:text-zinc-300 font-semibold">{{ data.car.name }}</div>
									<div class="flex items-center gap-2 group">
										<small class="text-sm block dark:text-zinc-300">{{ data.car.number }}</small>
									</div>
								</div>
							</template>
						</Column>

						<Column header="Client">
							<template #body="{ data }">
								<div>
									<div class="dark:text-zinc-300 font-semibold">{{ data.customer }}</div>
									<div class="flex items-center gap-2 group">
										<small class="text-sm block dark:text-zinc-300">{{ data.CIN }}</small>
										<i class="fi fi-brands-whatsapp opacity-0 group-hover:opacity-100"></i>
									</div>
								</div>
							</template>
						</Column>

						<Column field="startDate" header="Date de début" />
						<Column field="endDate" header="Date de fin" />
						<Column field="status" header="Statut">
							<template #body="{ data }">
								<Tag v-if="data && data.status" :value="data.status"
									:severity="getStatusClass(data.status)" />
								<span v-else>Aucun statut</span>
							</template>
						</Column>
					</DataTable>
				</BaseCard>
			</div>

			<div class="lg:w-1/3 w-full ">
				<BaseCard title="État du parc">
					<DonutChart />
				</BaseCard>
			</div>
		</div>

		<BaseCard title="Income vs Expenses">
			<IncomeVsExpensesChart :incomeData="incomeVsExpenseSeries[0].data"
				:expenseData="incomeVsExpenseSeries[1].data"
				:categories="incomeVsExpenseChartOptions.xaxis.categories" />
		</BaseCard>
	</Section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { MainLayout } from '@admin/views/layouts';
import Tag from 'primevue/tag';
import StatCard from '@views/components/stats/card.vue';
import DonutChart from './_partials/park-status-chart.vue';
import IncomeVsExpensesChart from './_partials/income-expenses-chart.vue';
import ApexCharts from 'vue3-apexcharts';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { incomeVsExpenseSeries, incomeVsExpenseChartOptions } from './configs/overview';
import reservationsData from './configs/reservations';
import { Row } from 'primevue';

defineOptions({ layout: MainLayout });

const reservations = ref(reservationsData);

const allReservations = 120;
const sales = 3000;
const expenses = 1500;
const profit = 1500;

const today = new Date();
const selectedDateRange = ref([today, today]);

const getStatusClass = (status) => {
	if (status === 'Confirmée') {
		return 'success';
	} else if (status === 'Annulée') {
		return 'danger';
	} else if (status === 'En attente') {
		return 'warn';
	}
	return '';
};

</script>
