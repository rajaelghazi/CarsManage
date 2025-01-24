<template>
	<BaseDrawerRemote ref="modal" title="Create Payment">
		<template #action>
			<Button label="Save" @click="save" />
		</template>

		<div class="grid items-start grid-cols-1 md:grid-cols-5 gap-5">
			<div class="col-span-1 md:col-span-3 space-y-5">
				<div class="flex flex-col gap-2">
					<BaseLabel for="paymentType">{{ $t('Payment Type') }}</BaseLabel>
					<Select v-model="form.paymentType" :options="paymentTypes" placeholder="Select payment type" filter fluid />
				</div>

				<div class="flex flex-col gap-2">
					<BaseLabel for="reservationId">{{ $t('Reservation ID') }}</BaseLabel>
					<InputText v-model="form.reservationId" placeholder="Enter reservation ID" />
				</div>

				<div class="flex flex-col gap-2">
					<BaseLabel for="paymentDate">{{ $t('Payment Date') }}</BaseLabel>
					<DatePicker v-model="form.paymentDate" placeholder="Select payment date" />
				</div>

				<div class="flex flex-col gap-2">
					<BaseLabel for="amount">{{ $t('Amount') }}</BaseLabel>
					<InputNumber v-model="form.amount" mode="decimal" placeholder="Enter amount" min="0" />
				</div>

				<div class="flex flex-col gap-2">
					<BaseLabel for="remainingAmount">{{ $t('Remaining Amount') }}</BaseLabel>
					<InputNumber v-model="form.remainingAmount" mode="decimal" placeholder="Enter remaining amount" min="0" />
				</div>

				<div class="flex flex-col gap-2">
					<BaseLabel for="comment">{{ $t('Comment') }}</BaseLabel>
					<Textarea v-model="form.comment" placeholder="Add a comment" />
				</div>
			</div>

			<div class="col-span-1 md:col-span-2 space-y-5">
				<div class="flex flex-col gap-2">
					<BaseLabel for="status">{{ $t('Status') }}</BaseLabel>
					<Select v-model="form.status" :options="paymentStatuses" placeholder="Select status" filter fluid />
				</div>
			</div>
		</div>
	</BaseDrawerRemote>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '@inertiajs/vue3';

const modal = ref(null)
const form = useForm({
	paymentType: null,
	reservationId: null,
	paymentDate: null,
	amount: 0,
	remainingAmount: 0,
	comment: null,
	status: 'Paid',
})

const paymentTypes = [
	{ name: 'Credit Card', value: 'Credit Card' },
	{ name: 'PayPal', value: 'PayPal' },
	{ name: 'Bank Transfer', value: 'Bank Transfer' },
	{ name: 'Cash', value: 'Cash' },
];

const paymentStatuses = [
	{ name: 'Paid', value: 'Paid' },
	{ name: 'Pending', value: 'Pending' },
	{ name: 'Failed', value: 'Failed' },
];

const save = () => {
	// Form submission logic for creating a payment
	// Example:
	// form.post($route('admin.payment.store'), {
	// 	onSuccess: () => {
	// 		modal.value.close();
	// 	}
	// })
}
</script>
