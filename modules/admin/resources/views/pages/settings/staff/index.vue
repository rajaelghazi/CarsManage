<template>
	<Section title="Personnel">
		<BaseCard title="Équipe actuelle">
			<template #end>
				<div class="ml-auto -m-1">
					<Button label="Inviter" @click="createNew = true" size="small" outlined severity="secondary"/>
					<TransferOwnership v-model="transferOwnership"/>
					<AddNew v-model="createNew"/>
				</div>
			</template>
	
			<ul class="space-y-2 gap-4">
				<li class="flex items-center border dark:border-surface-700 relative rounded-md px-4 py-4">
					<header class="grid md:grid-cols-2 gap-6 w-full">
						<div class="flex items-center gap-4">
							<Avatar label="MA" class="size-9 bg-surface-900 text-surface-50 text-sm" />
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">John Doe</span>
								<span class="text-xs">john.doe@gmail.com</span>
							</span>
						</div>

						<div class="grid grid-cols-2 gap-10">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Rôle</span>
								<span class="text-xs">Manager</span>
							</span>
	
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Dernière connexion</span>
								<span class="text-xs">Il y a 3h</span>
							</span>
						</div>
					</header>

					<div class="absolute md:relative top-3 right-3 md:top-auto md:right-auto">
						<Button severity="secondary" icon="fi fi-rr-menu-dots-vertical" @click="menuDisabled?.toggle" outlined />
						<Menu ref="menuDisabled" id="overlay_menu" :model="menuDisabmedItems" :popup="true" />
					</div>
				</li>
			</ul>
		</BaseCard>

		<BaseCard title="Statut des invitations">
			<Datatable class="-m-5" :value="invitaions" data-key="id" table-style="min-width: 40rem">
				<Column field="email" header="Email"></Column>
				<Column field="role.name" header="Rôle"></Column>
				<Column field="status" header="Statut" #body="{ data }">
					<Tag size="small" severity="secondary">{{ data.status }}</Tag>
				</Column>
				<Column #body="{ data }">
					<i v-if="data.status == 'pending'" class="fi fi-rr-trash"></i>
				</Column>
			</Datatable>
		</BaseCard>

		<!-- <BaseCard title="Transférer l'atelier du propriétaire">
			<template #end>
				<div class="ml-auto -m-1">
					<Button label="Transferer" @click="transferOwnership = true" size="small" outlined severity="secondary"/>
				</div>
			</template>

			<header class="flex items-start gap-4 w-full">
				<Avatar label="MA" class="size-9 bg-surface-900 text-surface-50 text-sm" />

				<span class="inline-flex flex-col items-start">
					<div class="flex items-center gap-2">
						<span class="font-bold text-base">John Doe</span>
						<Tag class="text-xs" size="small">Propriétaire</Tag>
					</div>
					<span class="text-xs">lorem@gmail.com</span>
				</span>
			</header>
		</BaseCard> -->
	</Section>
</template>

<script setup>
import { ref } from 'vue';
import Section from '../_shared/section.vue';
import TransferOwnership from './_partials/transfer-ownership.vue';
import AddNew from './_partials/add-new.vue';

const invitaions = [
	{
		id: 1,
		role: {
			name: 'Admin'
		},
		email: 'john.doe@gmail.com',
		status: "en attente",
	},
	{
		id: 2,
		role: {
			name: 'Manager'
		},
		email: 'jane.doe@gmail.com',
		status: "expiré",
	},
	{
		id: 3,
		role: {
			name: 'Centre de confirmation'
		},
		email: 'jane.doe@gmail.com',
		status: "refusé",
	},
]

const transferOwnership = ref(false);
const createNew = ref(false);

const menuDisabled = ref();
const menuDisabmedItems = ref([
	{
		label: 'Activer',
		icon: 'fi fi-rr-unlock'
	},
	{ separator: true },
	{
		label: 'Se connecter en tant que',
		icon: 'fi fi-rr-enter'
	},
]);
</script>
