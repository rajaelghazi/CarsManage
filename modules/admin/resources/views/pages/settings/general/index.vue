<template>
	<Section title="Général">
		<BaseCard title="Détails de l'entreprise">
			<BaseCard>
				<div class="flex items-center">
					<div class="flex items-center gap-4 w-full">
						<div class="grid rounded-xl text-2xl">
							<i class="fi fi-rr-cube place-self-center"></i>
						</div>

						<span class="inline-flex flex-col items-start">
							<span class="font-bold text-base">Avela</span>
							<span class="text-xs">lorem@gmail.com</span>
						</span>
					</div>

					<Button @click="editInfo = true" severity="secondary" icon="fi fi-rr-pencil" outlined />
					<EditInfo v-model="editInfo" />
				</div>

				<Divider />

				<div class="flex items-center">
					<div class="flex items-center gap-4 w-full">
						<div class="grid rounded-xl text-2xl">
							<i class="fi fi-rr-visit place-self-center"></i>
						</div>

						<span class="inline-flex flex-col items-start">
							<span class="font-bold text-base">Adresse</span>
							<span class="text-xs">Lorem ipsum dolor sit. Agadir, Morocco</span>
						</span>
					</div>

					<Button @click="editAddress = true" severity="secondary" icon="fi fi-rr-pencil" outlined />
					<EditAddress v-model="editAddress"/>
				</div>
			</BaseCard>
		</BaseCard>
	</Section>
</template>

<script setup>
import { ref } from 'vue';
import Section from '../_shared/section.vue';

import EditAddress from './_partials/edit-address.vue';
import EditInfo from './_partials/edit-info.vue';

const editInfo = ref(false);
const editAddress = ref(false);
</script>