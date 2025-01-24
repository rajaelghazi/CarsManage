<template>
	<BaseDrawerRemote ref="modal" title="Créer un véhicule">
		<template #action>
			<Button label="Créer" @click="submitForm" />
		</template>

		<div class="grid items-start grid-cols-1 md:grid-cols-5 gap-5">
			<div class="col-span-1 md:col-span-3 space-y-5">
				<InformationsPrincipales :form="form" />
				<DetailsSupplementaires :form="form" />
			</div>
			<div class="col-span-1 md:col-span-2 space-y-5">
				<PhotoEtStatut :form="form" />
				<AssuranceEtMaintenance :form="form" />
			</div>
		</div>
	</BaseDrawerRemote>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useForm } from '@inertiajs/vue3';
import InformationsPrincipales from '../_partials/InformationsPrincipales.vue';
import DetailsSupplementaires from '../_partials/DetailsSupplementaires.vue';
import PhotoEtStatut from '../_partials/PhotoEtStatut.vue';
import AssuranceEtMaintenance from '../_partials/AssuranceEtMaintenance.vue';

const fuelTypes = ['Essence', 'Diesel', 'Électrique', 'Hybride'];
const transmissions = ['Manuelle', 'Automatique'];
const statuses = ['Panne', 'En maintenance', 'Réservé', 'Disponible'];

const form = useForm({
	brand: '',
	fuelType: '',
	transmission: '',
	licencePlate: '',
	color: '',
	year: null,
	mileage: null,
	numberOfSeats: null,
	numberOfDoors: null,
	photo: null,
	entryDate: null,
	status: '',
	insurance: {
		company: '',
		expirationDate: null,
	},
	maintenanceHistory: [],
});

const modal = ref(null);

const submitForm = () => {
	// form.post('/create-car-endpoint');
};
</script>