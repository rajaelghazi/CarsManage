<template>
	<BaseDrawerRemote ref="modal" title="Mise à jour du véhicule">
	  <template #action>
		<Button label="Mettre à jour" />
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

const modal = ref(null);

  const form = useForm({
	brand: 'Dacia',
	fuelType: 'Essence',
	transmission: 'Manuelle',
	licencePlate: '15000|أ|33',
	color: 'Blanc',
	year: 2020,
	mileage: 35000,
	numberOfSeats: 5,
	numberOfDoors: 5,
	photo: 'car1.png',
	entryDate: '2024-05-10',
	status: 'Disponible',
	registrationExpiryDate: '2025-05-10',
	insurance: {
	  company: 'AXA',
	  expirationDate: '2025-01-15'
	},
	maintenanceHistory: [
	  { date: '2022-06-20', description: 'Changement d\'huile' },
	  { date: '2023-04-15', description: 'Révision des freins' }
	],
  });

</script>
