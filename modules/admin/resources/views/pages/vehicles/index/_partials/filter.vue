<template>
	<div class="min-w-60 md:min-w-80 space-y-3">
		<div class="flex flex-col gap-2">
			<BaseLabel for="status">{{ $t('Statut') }}</BaseLabel>
			<Select :options="statusOptions" option-label="label" placeholder="Sélectionner le Statut" filter fluid
				v-model="filters.status" />
		</div>

		<div class="flex flex-col gap-2">
			<BaseLabel for="dateRange">{{ $t('Plage de Dates') }}</BaseLabel>
			<DatePicker v-model="filters.dateRange" selectionMode="range" :manualInput="false" showButtonBar showIcon
				iconDisplay="input" placeholder="Sélectionner la Plage de Dates" />
		</div>

	</div>
</template>

<script setup>
import { ref } from "vue";

const statusOptions = ref([
	{ label: "Panne", value: "Panne" },
	{ label: "En Maintenance", value: "En Maintenance" },
	{ label: "Réservé", value: "Réservé" },
	{ label: "Disponible", value: "Disponible" },
]);

const filters = ref({
	status: "",
	dateRange: null,
});

const clearFilters = () => {
	filters.value = {
		status: "",
		dateRange: null,
	};
};
</script>