<template>
	<BaseSection title="Gérer les Clients">
		<BaseDatatable v-model:selection="selected" :value="customers" data-key="id" width="80rem">
			<template #search>
				<InputText fluid placeholder="Rechercher des clients" />
			</template>

			<template #filter>
				<Filter />
			</template>

			<template #actions>
				<Button label="Ajouter un client" class="btn-label" as="modal-link"
					:href="$route('admin.customer.create')" icon="fi fi-rr-plus" navigate />
				<Button label="Supprimer" class="btn-label" @click="deleteSelected" :disabled="selected.length == 0"
					severity="secondary" icon="fi fi-rr-trash" outlined />
			</template>

			<template #default>
				<Column class="w-3" selection-mode="multiple"></Column>

				<Column field="fullname&cin" header="Nom et CIN">
					<template #body="{ data }">
						<div>
							<strong class="dark:text-zinc-300">
								{{ data.gender === 'Femme' ? 'Mme. ' : 'M. ' }}{{ data.fullname }}
							</strong>
							<div class="flex items-center gap-2 group">
								<small class="text-sm block dark:text-zinc-300">{{ data.documents.CIN }}</small>
							</div>
						</div>
					</template>
				</Column>

				<Column field="email&phone" header="Contact">
					<template #body="{ data }">
						<div class="flex flex-col gap-3">
							<div class="flex items-center gap-2 group">
								<span>{{ data.email }}</span>
								<i class="fi fi-rr-envelope opacity-0 group-hover:opacity-100"></i>
							</div>
							<div class="flex items-center gap-2 group">
								<span>{{ data.phone }}</span>
								<i class="fi fi-brands-whatsapp opacity-0 group-hover:opacity-100"></i>
							</div>
						</div>
					</template>
				</Column>

				<Column field="date_de_naissance" header="Anniversaire">
					<template #body="{ data }">
						{{ data.date_de_naissance }}
					</template>
				</Column>

				<Column field="adresse" header="Adresse">
					<template #body="{ data }">
						{{ data.adresse }}
					</template>
				</Column>

				<Column field="ville" header="Ville">
					<template #body="{ data }">
						{{ data.ville }}
					</template>
				</Column>

				<Column field="notes" header="Notes">
					<template #body="{ data }">
						{{ data.notes }}
					</template>
				</Column>

				<Column header="Actions">
					<template #body="{ data }">
						<div class="flex gap-1">

							<Button as="modal-link" :href="$route('admin.customer.details', { id: data.id })"
								v-tooltip.top="'Plus de details'" icon="fi-rr-eye" size="small" severity="secondary" />

							<Button as="modal-link" :href="$route('admin.customer.edit', { id: data.id })"
								v-tooltip.top="'Modifier'" icon="fi-rr-edit" size="small" severity="secondary"
								outlined />

						</div>
					</template>
				</Column>
			</template>

			<template #empty>
				<EmptyState icon="fi-rr-user" title="Aucun client trouvé"
					description="Commencez par ajouter un nouveau client">
					<Button label="Ajouter un client" size="small" severity="secondary" as="modal-link"
						:href="$route('admin.customer.create')" icon="fi fi-rr-plus" navigate outlined />
				</EmptyState>
			</template>
		</BaseDatatable>
	</BaseSection>
</template>

<script setup>
import { ref } from 'vue'
import { MainLayout } from '@admin/views/layouts'
import customerData from '../configs/overview';

import Filter from './_partials/filter.vue'

const customers = ref(customerData);

const selected = ref([]);


defineOptions({ layout: MainLayout });
</script>