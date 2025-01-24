<template>
	<div class="flex flex-col gap-10">
		
		<Analyses />

		<PerformingVehicles />

		<StaffsPerforming />
		
		<PerformingLocations />

		<TopExpenses />

		<TopSources />

		
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { MainLayout } from '@admin/views/layouts';
import Analyses from "./_partials/Analyses.vue";
import PerformingVehicles from "./_partials/PerformingVehicles.vue"
import StaffsPerforming from "./_partials/StaffsPerforming.vue"
import PerformingLocations from "./_partials/PerformingLocations.vue"
import TopExpenses from "./_partials/TopExpenses.vue"
import TopSources from "./_partials/TopSources.vue"

defineOptions({ layout: MainLayout })
</script>