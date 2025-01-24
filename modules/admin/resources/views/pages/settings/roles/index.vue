<template>
	<Section title="Rôles">
		<BaseCard title="Tous les rôles">
			<template #end>
				<div class="ml-auto -m-1">
					<Button label="Créer une Role" @click="createNew = true" size="small" outlined severity="secondary"/>
					<AddNew v-model="createNew"/>
				</div>
			</template>

			<div class="grid grid-cols-1 gap-2">
				<BaseCard>
					<div class="-m-1 flex items-center justify-between">
						<div class="grid md:grid-cols-2 gap-6 w-full">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Gestionnaire des réservations</span>
								<small>2 permissions</small>
							</span>
							
							<div class="grid grid-cols-2 gap-10">
								<span class="inline-flex flex-col items-start">
									<small>Statut</small>
									<span class="font-bold text-base">Actif</span>
								</span>
	
								<span class="inline-flex flex-col items-start">
									<small>Utilisateurs totaux</small>
									<span class="font-bold text-base">2 utilisateurs</span>
								</span>
							</div>
						</div>

						<div class="absolute md:relative top-3 right-3 md:top-auto md:right-auto">
							<Button severity="secondary" @click="adjustRole = true" icon="fi fi-rr-settings" outlined />
						</div>
						<AdjustRole v-model="adjustRole" />
					</div>
				</BaseCard>
			</div>
		</BaseCard>
	</Section>
</template>

<script setup>
import { ref } from 'vue';
import Section from '../_shared/section.vue';
import AddNew from './_partials/add-new.vue';
import AdjustRole from './_partials/role-adjust.vue';

const adjustRole = ref(false)
const createNew = ref(false)
</script>

<style lang="postcss">
.p-panel-header {
	@apply bg-zinc-100
}
</style>