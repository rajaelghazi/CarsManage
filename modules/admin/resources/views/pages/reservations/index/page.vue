<template>
	<BaseSection title="Gérer les réservations">
		<BaseDatatable v-model:selection="selected" :value="props.reservations" data-key="id" width="80rem">
			<template #search>
				<InputText fluid placeholder="rechercher les réservations" />
			</template>

			<template #filter>
				<Filter />
			</template>

			<template #actions>
				<Button label="Créer" class="btn-label" as="modal-link" :href="$route('admin.reservation.create')"
					icon="fi fi-rr-plus" navigate />

				<!-- <Button label="Modifier" class="btn-label" @click="editReservation" :disabled="selected.length == 0"
					severity="secondary" icon="fi fi-rr-edit" outlined /> -->
				<Button label="Supprimer" class="btn-label" severity="secondary" icon="fi fi-rr-trash" outlined
					:disabled="selected.length == 0" />

				<Button label="Imprimer" class="btn-label" severity="secondary" icon="fi fi-rr-print" outlined
					@click="printReservations" :disabled="props.reservations.length == 0" />

				<!-- <Button label="More actions" class="btn-label" @click="moreActionMenu?.toggle" severity="secondary"
					icon="fi fi-rr-menu-dots-vertical" outlined />
				<Menu ref="moreActionMenu" class="mt-2" :model="moreActionMenuItems" :popup="true" /> -->
			</template>

			<template #default>
				<Column class="w-3" selection-mode="multiple"></Column>

				<Column field="id" header="ID">
					<template #body="{ data }">
						<div class="flex items-center gap-4">
							<!-- <ModalLink :href="$route('merchant.order.show', { order: data.id })" navigate>
								<i class="fi fi-rr-clock text-xl text-zinc-500"></i>
							</ModalLink> -->

							<div>
								<strong class="dark:text-zinc-300">#{{ data.id }}</strong>
								<small class="text-sm block text-zinc-500">{{ data.created_at }}</small>
							</div>
						</div>
					</template>
				</Column>

				<Column field="customer" header="Client">
					<template #body="{ data }">
						<strong class="dark:text-zinc-300">{{ data.customer.fullname }}</strong>

						<div class="flex items-center gap-2 group">
							<small class="text-sm block dark:text-zinc-300">{{ data.customer.cin }}</small>
							<i class="fi fi-brands-whatsapp opacity-0 group-hover:opacity-100"></i>
						</div>
					</template>
				</Column>
				<Column field="pickup" header="Départ">
					<template #body="{ data }">
						<p class="dark:text-zinc-300">{{ data.pickup_date }}</p>
					</template>
				</Column>
				<Column field="return" header="Retour">
					<template #body="{ data }">
						<p class="dark:text-zinc-300">{{ data.return_date }}</p>
					</template>
				</Column>

				<Column field="vehicle" header="Véhicle">
					<template #body="{ data }">
						<div class="flex flex-col">
							<strong class="dark:text-zinc-300">{{ data.vehicle.name }}</strong>
							<span class="dark:text-zinc-300 text-left" dir="rtl">{{ data.vehicle.number }}</span>
						</div>
					</template>
				</Column>

				<Column field="price" header="Total Prix HT">
					<template #body="{ data }">
						<strong class="dark:text-zinc-300">{{ formatPrice(data.total) }}</strong>
						<small class="text-base block text-zinc-500 dark:text-zinc-300">
							5 days
						</small>
					</template>
				</Column>

				<Column header="Actions">
					<template #body="{ data }">
						<div class="flex gap-1">
							<Button as="modal-link" :href="$route('admin.reservation.details')"
								v-tooltip.top="'Plus de details'" icon="fi-rr-eye" size="small" severity="secondary" />
							<Button as="modal-link" :href="$route('admin.reservation.edit', { id: data.id })"
								v-tooltip.top="'Modifier'" icon="fi-rr-edit" size="small" severity="secondary"
								outlined />
						</div>
					</template>
				</Column>
			</template>

			<template #empty>
				<EmptyState icon="fi-rr-shopping-bag" title="Aucune Réservation"
					description="Ajouter votre première réservation">
					<Button label="Ajouter une réservation" size="small" severity="secondary" icon="fi fi-rr-plus"
						navigate outlined />
				</EmptyState>
			</template>
		</BaseDatatable>
	</BaseSection>
</template>

<script setup>
import { ref } from 'vue'
import { MainLayout } from '@admin/views/layouts'
import { formatPrice } from '@scripts/utils'

import Filter from './_partials/filter.vue'

const props = defineProps({
	reservations: Object
});

const selected = ref([]);


const printReservations = () => {
	const printableContent = document.createElement('div');
	printableContent.innerHTML = `
    <h1>Liste des Réservations</h1>
    <table border="1" style="width: 100%; border-collapse: collapse; text-align: left;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client</th>
          <th>Départ</th>
          <th>Retour</th>
          <th>Véhicule</th>
          <th>Total Prix HT</th>
        </tr>
      </thead>
      <tbody>
        ${props.reservations.map(reservation => `
          <tr>
            <td>#${reservation.id}</td>
            <td>${reservation.customer.fullname}</td>
            <td>${reservation.pickup_date}</td>
            <td>${reservation.return_date}</td>
            <td>${reservation.vehicle.name} - ${reservation.vehicle.number}</td>
            <td>${formatPrice(reservation.total)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

	const printWindow = window.open('', '', 'height=600,width=800');
	printWindow.document.write(printableContent.outerHTML);
	printWindow.document.close();
	printWindow.print();
};

defineOptions({ layout: MainLayout })
</script>