<template>
	<BaseSection title="Gérer les Véhicules">
		<BaseDatatable v-model:selection="selected" :value="paginatedVehicles" data-key="id" width="80rem">

			<template #search>
				<InputText fluid placeholder="Rechercher des véhicules" />
			</template>

			<template #filter>
				<Filter @filter="applyFilters" />
			</template>

			<template #actions>
				<div class="flex gap-2">
					<Button label="Ajouter un véhicule" class="btn-label" as="modal-link"
						:href="$route('admin.vehicle.create')" icon="fi fi-rr-plus" navigate />
					<Button label="Supprimer" class="btn-label" @click="deleteSelected" :disabled="selected.length == 0"
						severity="secondary" icon="fi fi-rr-trash" outlined />
				</div>
			</template>

			<template #default>
				<Column class="w-3" selection-mode="multiple"></Column>

				<Column field="id" header="ID">
					<template #body="{ data }">
						<strong>#{{ data.id }}</strong>
					</template>
				</Column>

				<Column field="photo" header="Image">
					<template #body="{ data }">
						<img :src="`/assets/${data.photo}`" alt="Vehicle Image"
							class="w-24 h-24 object-contain rounded" />
					</template>
				</Column>

				<Column field="brand" header="Identification">
					<template #body="{ data }">
						<div>
							<strong class="dark:text-zinc-300">{{ data.brand }}</strong>
							<small class="text-sm block dark:text-zinc-300">{{ data.licencePlate }}</small>
						</div>
					</template>
				</Column>

				<Column header="Année">
					<template #body="{ data }">
						<div>
							{{ data.year }}
						</div>
					</template>
				</Column>

				<Column field="transmission" header="Transmission">
					<template #body="{ data }">
						<div>
							<strong class="dark:text-zinc-300">{{ data.transmission }}</strong>
							<small class="text-sm block dark:text-zinc-300"><span
									class="text-sm font-medium block dark:text-zinc-300">Carburant :</span> {{
										data.fuelType }}</small>
						</div>
					</template>
				</Column>

				<Column header="Fin d'immatriculation">
					<template #body="{ data }">
						<div>
							{{ data.registrationExpiryDate }}
						</div>
					</template>
				</Column>

				<Column header="Assurance">
					<template #body="{ data }">
						<div>
							<strong>{{ data.insurance.company }}</strong>
							<small class="block text-sm">Exp :{{ data.insurance.expirationDate }}</small>
						</div>
					</template>
				</Column>



				<Column field="status" header="Statut">
					<template #body="{ data }">
						<Tag :value="data.status" :severity="getStatusClass(data.status)" />
					</template>
				</Column>

				<Column header="Actions">
					<template #body="{ data }">
						<div class="flex gap-1">
							<Button as="modal-link" :href="$route('admin.vehicle.details', { id: data.id })"
								v-tooltip.top="'Plus de details'" icon="fi-rr-eye" size="small" severity="secondary" />
							<Button as="modal-link" :href="$route('admin.vehicle.edit', { id: data.id })"
								v-tooltip.top="'Modifier'" icon="fi-rr-edit" size="small" severity="secondary"
								outlined />
						</div>
					</template>
				</Column>
			</template>

			<template #empty>
				<EmptyState icon="fi-rr-car" title="Aucun Véhicule"
					description="Commencez et ajoutez votre premier véhicule">
					<Button label="Créer un nouveau véhicule" size="small" severity="secondary" as="modal-link"
						:href="$route('admin.vehicle.create')" icon="fi fi-rr-plus" navigate outlined />
				</EmptyState>
			</template>
		</BaseDatatable>

		<Pagination :current-page="currentPage" :total-items="filteredVehicles.length" :items-per-page="itemsPerPage"
			@page-change="handlePageChange" />
	</BaseSection>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { visitModal } from '@inertiaui/modal-vue';
import { MainLayout } from '@admin/views/layouts';
import Filter from './_partials/filter.vue';
import { vehicles as initialVehicles } from './configs/vehicles';

defineOptions({ layout: MainLayout });

const vehicles = ref(initialVehicles);
const selected = ref([]);
const filteredVehicles = ref(vehicles.value);

const currentPage = ref(1);
const itemsPerPage = 10;

const paginatedVehicles = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	return filteredVehicles.value.slice(start, end);
});

const handlePageChange = (page) => {
	currentPage.value = page;
};

const applyFilters = (filterCriteria) => {
	const { status, startDate, endDate } = filterCriteria;

	filteredVehicles.value = vehicles.value.filter((vehicle) => {
		let matches = true;

		if (status && vehicle.status !== status) {
			matches = false;
		}

		if (startDate && new Date(vehicle.entryDate) < new Date(startDate)) {
			matches = false;
		}
		if (endDate && new Date(vehicle.entryDate) > new Date(endDate)) {
			matches = false;
		}

		return matches;
	});
};

const deleteSelected = () => {
	if (selected.value.length === 0) {
		alert('Aucun véhicule sélectionné pour suppression.');
		return;
	}

	selected.value.forEach((vehicle) => {
		const index = vehicles.value.findIndex((v) => v.id === vehicle.id);
		if (index !== -1) {
			vehicles.value.splice(index, 1);
		}
	});
	selected.value = [];
	alert('Les véhicules sélectionnés ont été supprimés.');
};

const getStatusClass = (status) => {
	switch (status) {
		case 'Disponible':
			return 'success';
		case 'En maintenance':
			return 'warn';
		case 'Réservé':
			return 'info';
		case 'En panne':
			return 'danger';
		default:
			return 'secondary';
	}
};


</script>
