<template>
	<div class="min-w-60 md:min-w-80 space-y-3">
        
		<div class="flex flex-col gap-2">
			<BaseLabel for="vehicule">{{ $t('Véhicule') }}</BaseLabel>
			<Select :options="vehicles" option-label="name" placeholder="Selectionnez une véhicule" filter fluid />
		</div>
		<div class="flex flex-col gap-2">
			<BaseLabel for="client">{{ $t('Client') }}</BaseLabel>
			<Select :options="clients" option-label="name" placeholder="Sélectionnez un client" filter fluid />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const vehicles = ref([
    { name: 'DACIA Duster', id: 5 },
    { name: 'DACIA Sandero', id: 6},
    { name: 'DACIA Logan', id: 7 },
    { name: 'Toyota Camry', id: 1 },
    { name: 'Honda Civic', id: 2 },
    { name: 'Ford Focus', id: 3 },
    { name: 'Chevrolet Malibu', id: 4 },
])

const clients = ref([
    { name: 'Amina Benkirane', id: 'ABK' },
    { name: 'Mohammed El Fassi', id: 'MEF' },
    { name: 'Fatima Zahra', id: 'FZM' },
    { name: 'Omar El Khattabi', id: 'OEK' },
    { name: 'Leila Bennani', id: 'LBN' }
])
</script>
