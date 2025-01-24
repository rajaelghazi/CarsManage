<template>
	<BaseDrawerRemote ref="modal" title="Détails du client">
		<div class="grid items-start grid-cols-1 md:grid-cols-5 gap-5">

			<div class="col-span-1 md:col-span-3 space-y-5">
				<BaseCard title="Informations du client">
					<div class="flex flex-col gap-3">

						<div class="flex gap-4 justify-start items-center">
							<div class="flex gap-2">
								<p class="font-bold">{{ $t('Nom complet') }} :</p>
								<p>{{ form.fullname }}</p>
							</div>
							<div class="flex gap-2">
								<p class="font-bold">{{ $t('CIN') }} :</p>
								<p>{{ form.documents.CIN }}</p>
							</div>
						</div>

						<div class="flex gap-2">
							<p class="font-bold">{{ $t('Téléphone') }} :</p>
							<p>{{ form.phone }}</p>
						</div>

						<div class="flex gap-2">
							<p class="font-bold">{{ $t('Email') }} :</p>
							<p>{{ form.email }}</p>
						</div>
					</div>
				</BaseCard>

				<BaseDatatable title="Historique des réservations" :value="form.reservations" data-key="id"
					class="-mt-4">
					<template #default>
						<Column header="Date">
							<template #body="{ data }">
								<div class="flex flex-col">
									<div class="flex items-center gap-2">
										<span class="font-bold text-sm">Dép.</span>
										<span class=" text-sm">{{ data.pickup_date }}</span>
									</div>

									<div class="flex items-center gap-2">
										<span class="font-bold text-sm">Rtr.</span>
										<span class=" text-sm">{{ data.return_date }}</span>
									</div>
								</div>
							</template>
						</Column>

						<Column header="Véhicule">
							<template #body="{ data }">
								<div class="flex flex-col">
									<div>
										<strong class=" text-sm">{{ data.vehicle.name }}</strong>
									</div>
									<div class=" text-sm">
										{{ data.vehicle.number }}
									</div>
								</div>
							</template>
						</Column>

						<Column header="Lieu">
							<template #body="{ data }">
								<div class="flex flex-col">
									<div class="flex items-center gap-2">
										<span class="font-bold text-sm">Dép.</span>
										<span class=" text-sm">{{ data.location.pickup }}</span>
									</div>

									<div class="flex items-center gap-2">
										<span class="font-bold text-sm">Rtr.</span>
										<span class=" text-sm">{{ data.location.dropoff }}</span>
									</div>
								</div>
							</template>
						</Column>

						<Column field="status" header="Statut" class=" text-sm"></Column>

						<Column header="Total" class=" text-sm">
							<template #body="{ data }">
								{{ data.total.toFixed(2) }} Dhs
							</template>
						</Column>
					</template>

					<template #empty>
						<EmptyState icon="fi-rr-calendar" title="Aucune réservation"
							description="Aucune réservation disponible pour ce client"></EmptyState>
					</template>
				</BaseDatatable>

			</div>

			<div class="col-span-1 md:col-span-2">
				<BaseCard title="Détails du client">
					<div class="flex flex-col gap-5">

						<div class="flex gap-2">
								<p class="font-bold">{{ $t('Genre') }} :</p>
								<p>{{ form.gender }}</p>
							</div>

						<div class="flex gap-2">
								<p class="font-bold">{{ $t('Date de naissance') }} :</p>
								<p>{{ form.date_de_naissance }}</p>
							</div>

						<div class="flex gap-2">
							<p class="font-bold">{{ $t('Ville') }} :</p>
							<p>{{ form.ville }}</p>
						</div>

						<div class="flex gap-2">
							<p class="font-bold">{{ $t('Adresse') }} :</p>
							<p>{{ form.adresse }}</p>
						</div>
						<div class="flex gap-2 w-full">
							<p class="font-bold">{{ $t('Notes') }}:</p>
							<p>{{ form.notes }}</p>
						</div>

					</div>
				</BaseCard>
			</div>

		</div>
	</BaseDrawerRemote>
</template>



<script setup>
import { ref, defineProps } from 'vue'
import { useForm } from '@inertiajs/vue3'

const modal = ref(null)

const props = defineProps({
	customer: Object
})

const form = useForm({
	id: props.customer?.id || 1,
	fullname: props.customer?.fullname || 'Ahmed Benjelloun',
	gender: props.customer?.gender || 'Homme',
	email: props.customer?.email || 'ahmed.benjelloun@example.com',
	phone: props.customer?.phone || '+212612345678',
	notes: props.customer?.notes || 'Client intéressé par la location de voitures pour un voyage à Casablanca.',
	documents: {
		CIN: props.customer?.documents?.CIN || 'A12345678',
		password: props.customer?.documents?.password || '',
	},
	adresse: props.customer?.adresse || '12 Rue Hassan II, Casablanca, Maroc',
	ville: props.customer?.ville || 'Casablanca',
	date_de_naissance: props.customer?.date_de_naissance || '1990-04-15',
	created_at: props.customer?.created_at || '2023-05-15',
	reservations: props.customer?.reservations || [
		{
			total: 1400.0,
			pickup_date: '02/12/2024',
			return_date: '07/12/2024',
			vehicle: { name: 'Renault Clio', number: '1000|ب|22' },
			created_at: '05/12/2024',
			status: 'Annulée',
			source: 'Google',
			location: { pickup: 'Rabat', dropoff: 'Meknes' },
		},
		{
			total: 2000.0,
			pickup_date: '15/01/2025',
			return_date: '20/01/2025',
			vehicle: { name: 'Peugeot 208', number: '2000|ج|33' },
			created_at: '10/01/2025',
			status: 'Confirmée',
			source: 'Facebook',
			location: { pickup: 'Casablanca', dropoff: 'Tanger' },
		},
	],
});


</script>
