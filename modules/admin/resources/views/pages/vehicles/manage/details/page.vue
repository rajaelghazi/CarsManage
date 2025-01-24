<template>
	<BaseDrawerRemote ref="modal" title="Détails du véhicule">

		<div class="grid items-start grid-cols-1 md:grid-cols-5 gap-5">
			<div class="col-span-1 md:col-span-3 space-y-5">
				<BaseCard title="Informations du véhicule">
					<div class="flex gap-3">
						<div class="flex-1">
							<p class="font-bold">Marque</p>
							<p>{{ vehicle.brand }}</p>
						</div>
						<div class="flex-1">
							<p class="font-bold">Type de carburant</p>
							<p>{{ vehicle.fuelType }}</p>
						</div>
						<div class="flex-1">
							<p class="font-bold">Transmission</p>
							<p>{{ vehicle.transmission }}</p>
						</div>
						<div class="flex-1">
							<p class="font-bold">Immatriculation</p>
							<p>{{ vehicle.licencePlate }}</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard title="Détails du véhicule">
					<div class="flex flex-col gap-5 ">
						<div class="flex gap-4 justify-start items-center">
							<img class=" h-20 object-container rounded-xl" :src="`/assets/${vehicle.photo}`"
								alt="Photo du véhicule" />
							<div class="flex gap-1">
								<p class="font-bold">Couleur :</p>
								<p>{{ vehicle.color }}</p>
							</div>
							<div class="flex gap-1">
								<p class="font-bold">Année :</p>
								<p>{{ vehicle.year }}</p>
							</div>
							<div class="flex gap-1">
								<p class="font-bold">Kilométrage :</p>
								<p>{{ vehicle.mileage }} km</p>
							</div>

						</div>

						<div class="flex gap-4">

							<div class="flex gap-1">
								<p class="font-bold">Nombre de sièges :</p>
								<p>{{ vehicle.numberOfSeats }}</p>
							</div>

							<div class="flex gap-1">
								<p class="font-bold">Nombre de portes :</p>
								<p>{{ vehicle.numberOfDoors }}</p>
							</div>
							<div class="flex gap-1">
								<p class="font-bold">Statut :</p>
								<p>{{ vehicle.status }}</p>
							</div>
						</div>
					</div>
				</BaseCard>

				<BaseCard title="Détails de l'assurance">
					<div class="flex gap-5">
						<div class="flex gap-1">
							<p class="font-bold">Compagnie :</p>
							<p>{{ vehicle.insurance.company }}</p>
						</div>
						<div class="flex gap-1">
							<p class="font-bold">Date d'expiration :</p>
							<p>{{ vehicle.insurance.expirationDate }}</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard title="Historique de maintenance">

					<div v-for="(maintenance, index) in vehicle.maintenanceHistory" :key="index" class="flex gap-1">
						<p class="font-bold">- {{ maintenance.date }} :</p>
						<p>{{ maintenance.description }}</p>
					</div>

				</BaseCard>

				
			</div>

			<div class="col-span-1 md:col-span-2 space-y-5">
				<BaseCard title="Date d'entrée">
					<div class="flex gap-1">
						<p class="font-bold">Date d'entrée :</p>
						<p>{{ vehicle.entryDate }}</p>
					</div>
				</BaseCard>
				<BaseCard title="Expiration de l'immatriculation">
					<div class="flex gap-1">
						<p class="font-bold">Date d'expiration de l'immatriculation :</p>
						<p>{{ vehicle.registrationExpiryDate }}</p>
					</div>
				</BaseCard>
			</div>
		</div>
	</BaseDrawerRemote>
</template>

<script setup>
import { ref } from 'vue'

const modal = ref(null)

const vehicle = {
	id: 1,
	brand: "Dacia",
	fuelType: "Essence",
	transmission: "Manuelle",
	licencePlate: "15000|أ|33",
	color: "Blanc",
	year: 2020,
	mileage: 35000,
	numberOfSeats: 5,
	numberOfDoors: 5,
	photo: "car1.png",
	entryDate: "2024-05-10",
	status: "Disponible",
	registrationExpiryDate: "2025-05-10",
	insurance: {
		company: "AXA",
		expirationDate: "2025-01-15"
	},
	maintenanceHistory: [
		{ date: "2022-06-20", description: "Changement d'huile" },
		{ date: "2023-04-15", description: "Révision des freins" }
	]
}
</script>