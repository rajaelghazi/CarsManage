<template>
	<BaseDrawerRemote ref="modal" title="Mettre à jour le paiement">
		<template #action>
			<Button label="Mettre à jour" @click="update" />
		</template>

		<BaseCard title="Modifier le paiement">
			<div class="grid items-start grid-cols-1 md:grid-cols-5 gap-5">
				<div class="col-span-1 md:col-span-3 space-y-5">
					<div class="flex flex-col gap-2">
						<BaseLabel for="paymentType">{{ $t('Type de paiement') }}</BaseLabel>
						<Select 
							v-model="form.paymentType" 
							:options="paymentTypes" 
							placeholder="Sélectionnez le type de paiement" 
							option-label="name" 
							option-value="value" 
							filter 
							fluid 
						/>
					</div>

					<div class="flex flex-col gap-2">
						<BaseLabel for="reservationId">{{ $t('ID de réservation') }}</BaseLabel>
						<InputText 
							v-model="form.reservationId" 
							placeholder="Saisissez l'ID de réservation" 
						/>
					</div>

					<div class="flex flex-col gap-2">
						<BaseLabel for="paymentDate">{{ $t('Date de paiement') }}</BaseLabel>
						<DatePicker 
							v-model="form.paymentDate" 
							placeholder="Sélectionnez la date de paiement" 
						/>
					</div>

					<div class="flex flex-col gap-2">
						<BaseLabel for="amount">{{ $t('Montant') }}</BaseLabel>
						<InputNumber 
							v-model="form.amount" 
							mode="decimal" 
							placeholder="Saisissez le montant" 
							min="0" 
						/>
					</div>

					<div class="flex flex-col gap-2">
						<BaseLabel for="remainingAmount">{{ $t('Montant restant') }}</BaseLabel>
						<InputNumber 
							v-model="form.remainingAmount" 
							mode="decimal" 
							placeholder="Saisissez le montant restant" 
							min="0" 
						/>
					</div>

					<div class="flex flex-col gap-2">
						<BaseLabel for="comment">{{ $t('Commentaire') }}</BaseLabel>
						<Textarea 
							v-model="form.comment" 
							placeholder="Ajoutez un commentaire" 
						/>
					</div>
				</div>

				<div class="col-span-1 md:col-span-2 space-y-5">
					<div class="flex flex-col gap-2">
						<BaseLabel for="status">{{ $t('Statut') }}</BaseLabel>
						<Select 
							v-model="form.status" 
							:options="paymentStatuses" 
							option-label="name" 
							option-value="value" 
							placeholder="Sélectionnez un statut" 
							filter 
							fluid 
						/>
					</div>
				</div>
			</div>
		</BaseCard>
	</BaseDrawerRemote>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';

const modal = ref(null);

const props = defineProps({
	payment: Object,
});

const form = useForm({
	paymentType: props.payment?.paymentType || null,
	reservationId: props.payment?.reservationId || null,
	paymentDate: props.payment?.paymentDate || null,
	amount: props.payment?.amount || 0,
	remainingAmount: props.payment?.remainingAmount || 0,
	comment: props.payment?.comment || null,
	status: props.payment?.status || 'Pending', // Default status set to Pending
});

const paymentTypes = [
	{ name: 'Carte de crédit', value: 'Credit Card' },
	{ name: 'PayPal', value: 'PayPal' },
	{ name: 'Virement bancaire', value: 'Bank Transfer' },
	{ name: 'Espèces', value: 'Cash' },
];

const paymentStatuses = [
	{ name: 'Payé', value: 'Paid' },
	{ name: 'En attente', value: 'Pending' },
	{ name: 'Partiellement payé', value: 'Partially Paid' },
	{ name: 'Échoué', value: 'Failed' },
];

const update = () => {
	// Logique de soumission pour mettre à jour le paiement
	// Exemple :
	// form.put($route('admin.payment.update', form.id), {
	// 	onSuccess: () => {
	// 		modal.value.close();
	// 	}
	// })
};
</script>
