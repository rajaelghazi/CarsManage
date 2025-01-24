<template>
	<Section title="Localisations">
		<BaseCard title="Localisations de Départ et de Retour">
			<template #end>
				<div class="ml-auto -m-1">
					<Button label="Ajouter une Localisation" @click="addLocation = true" size="small" outlined
						severity="secondary" />
					<AddNewLocation v-model="addLocation" />
				</div>
			</template>

			<div class="grid grid-cols-1 gap-2">
				<BaseCard>
					<div class="-m-1 flex items-center justify-between">
						<div class="grid md:grid-cols-2 gap-6 w-full">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Aéroport Agadir</span>
								<small>Aéroport International Agadir Al-Massira</small>
							</span>

							<div class="grid grid-cols-3 gap-10">
								<span class="inline-flex flex-col items-start">
									<small>Statut</small>
									<span class="font-bold text-base">Actif</span>
								</span>
								<span class="inline-flex flex-col items-start">
									<small>Frais</small>
									<span class="font-bold text-base">23 Dhs</span>
								</span>
							</div>
						</div>

						<div class="absolute md:relative top-3 right-3 md:top-auto md:right-auto">
							<Button severity="secondary" @click="adjustLocation = true" icon="fi fi-rr-settings" outlined />
						</div>
						<AdjustLocation v-model="adjustLocation" />
					</div>
				</BaseCard>

				<BaseCard>
					<div class="-m-1 flex items-center justify-between">
						<div class="grid md:grid-cols-2 gap-6 w-full">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Aéroport de Rabat-Salé</span>
								<small>Salé, Rabat</small>
							</span>

							<div class="grid grid-cols-3 gap-10">
								<span class="inline-flex flex-col items-start">
									<small>Statut</small>
									<span class="font-bold text-base">Inactif</span>
								</span>
								<span class="inline-flex flex-col items-start">
									<small>Frais</small>
									<span class="font-bold text-base">42 Dhs</span>
								</span>
							</div>
							
						</div>

						<div class="absolute md:relative top-3 right-3 md:top-auto md:right-auto">
							<Button severity="secondary" @click="adjustLocation = true" icon="fi fi-rr-settings" outlined />
						</div>
						<AdjustLocation v-model="adjustLocation" />
					</div>
				</BaseCard>
			</div>
		</BaseCard>
	</Section>
</template>

<script setup>
import { ref } from 'vue';
import Section from '../_shared/section.vue';
import AddNewLocation from './_partials/add-location.vue';
import AdjustLocation from './_partials/location-adjust.vue';

const addLocation = ref(false)
const adjustLocation = ref(false)
</script>

<style lang="postcss">
.p-panel-header {
	@apply bg-zinc-100
}
</style>
