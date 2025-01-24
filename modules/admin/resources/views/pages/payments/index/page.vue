<template>
	<BaseSection title="Gérer les Paiements">
		<BaseDatatable 
            v-model:selection="selected" 
            :value="paginatedPayments" 
            data-key="id" 
            width="80rem">
			<template #search>
				<InputText fluid placeholder="Rechercher des paiements" />
			</template>

			<template #filter>
				<Filter @filter="applyFilters" />
			</template>

			<template #actions>
				<Button label="Supprimer" 
                        class="btn-label" 
                        @click="deleteSelected" 
                        :disabled="selected.length == 0"
						severity="secondary" 
                        icon="fi fi-rr-trash" 
                        outlined />
			</template>

			<template #default>
				<Column class="w-3" selection-mode="multiple"></Column>

				<Column field="id" header="ID">
					<template #body="{ data }">
						<strong>#{{ data.id }}</strong>
					</template>
				</Column>

				<Column field="amount" header="Montant">
					<template #body="{ data }">
						<div>
							<strong>{{ data.amount }}</strong>
							<small v-if="data.remainingAmount > 0" class="text-sm block dark:text-zinc-300">
								Restant : {{ data.remainingAmount }}
							</small>
						</div>
					</template>
				</Column>

				<Column field="status" header="Statut">
					<template #body="{ data }">
						<div>
							<Tag :value="data.status" :severity="getStatusClass(data.status)" />
							<small class="text-sm block dark:text-zinc-300 mt-1">
								{{ data.paymentType }}
							</small>
						</div>
					</template>
				</Column>

				<Column field="reservationId" header="ID Réservation">
					<template #body="{ data }">
						<strong>#{{ data.reservationId }}</strong>
					</template>
				</Column>

				<Column field="comment" header="Commentaire">
					<template #body="{ data }">
						<div>
							<span class="dark:text-zinc-300">{{ data.comment }}</span>
							<small class="text-sm block dark:text-zinc-300 ">
								{{ data.paymentDate }}
							</small>
						</div>
					</template>
				</Column>

				<Column header="Actions">
					<template #body="{ data }">
						<Button as="modal-link" :href="$route('admin.payment.edit', { id: data.id })"
							v-tooltip.top="'Modifier le paiement'" icon="fi-rr-pencil" size="small" severity="secondary" />
					</template>
				</Column>
			</template>

			<template #empty>
				<EmptyState icon="fi-rr-credit-card" title="Aucun Paiement"
					description="Commencez et créez votre premier paiement">
					<Button label="Créer un nouveau paiement" size="small" severity="secondary" as="modal-link"
						:href="$route('admin.payment.create')" icon="fi fi-rr-plus" navigate outlined />
				</EmptyState>
			</template>
		</BaseDatatable>
		
        <Pagination 
            :current-page="currentPage" 
            :total-items="filteredPayments.length" 
            :items-per-page="itemsPerPage" 
            @page-change="handlePageChange" />
	</BaseSection>
</template>

<script setup>
import { ref, computed } from 'vue';
import { visitModal } from '@inertiaui/modal-vue';
import { MainLayout } from '@admin/views/layouts';
import Filter from './_partials/filter.vue';
import { paiements as paiements } from '../configs/overview';

// Define layout
defineOptions({ layout: MainLayout });

// Data references
const payments = ref(paiements);
const selected = ref([]);
const filteredPayments = ref(payments.value);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 10;

// Computed for paginated payments
const paginatedPayments = computed(() => {
	const start = (currentPage.value - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	return filteredPayments.value.slice(start, end);
});

// Pagination handler
const handlePageChange = (page) => {
	currentPage.value = page;
};

const applyFilters = (filterCriteria) => {
	const { paymentType, reservationId, status, startDate, endDate } = filterCriteria;

	filteredPayments.value = payments.value.filter((payment) => {
		let matches = true;

		if (paymentType && payment.paymentType !== paymentType) {
			matches = false;
		}

		if (reservationId && !payment.reservationId.toString().includes(reservationId)) {
			matches = false;
		}

		if (status && payment.status !== status) {
			matches = false;
		}

		if (startDate && new Date(payment.paymentDate) < new Date(startDate)) {
			matches = false;
		}
		if (endDate && new Date(payment.paymentDate) > new Date(endDate)) {
			matches = false;
		}

		return matches;
	});
};

const deleteSelected = () => {
	if (selected.value.length === 0) {
		alert('Aucun paiement sélectionné pour suppression.');
		return;
	}

	selected.value.forEach((payment) => {
		const index = payments.value.findIndex((p) => p.id === payment.id);
		if (index !== -1) {
			payments.value.splice(index, 1);
		}
	});
	selected.value = [];
	alert('Les paiements sélectionnés ont été supprimés.');
};

const editPayment = (id) => {
	visitModal($route('admin.payment.edit', { id }), {
		navigate: true,
	});
};

const getStatusClass = (status) => {
	switch (status) {
		case 'Payé':
			return 'success';
		case 'Partiellement Payé':
			return 'secondary';
		case 'En attente':
			return 'warn';
		case 'Annulé':
			return 'danger';
		default:
			return 'secondary';
	}
};
</script>
