<template>
	<BaseDrawerRemote ref="modal" title="Mise à jour de la réservation">
		<template #action>
			<!-- <SplitButton @click="save" :loading="form.processing" label="Save" :model="items"
				dropdown-icon="fi fi-rr-angle-down" fluid /> -->
				<Button label="Mise à jour" />
		</template>

		<div class="grid items-start grid-cols-1 md:grid-cols-5 gap-5">
			<div class="col-span-1 md:col-span-3 space-y-5">
				<ClientInfo v-model="form" />
				
				<ReservationInfo v-model="form" />

				<VehicleInfo v-model="form" />				
			</div>

			<div class="col-span-1 md:col-span-2 space-y-5">
				<AssurenceInfo v-model="form" />
				
				<PaymentInfo v-model="form"/>
			</div>
		</div>
	</BaseDrawerRemote>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '@inertiajs/vue3';
import ReservationInfo from '../_partials/reservation-info.vue';
import PaymentInfo from '../_partials/payment-info.vue';
import ClientInfo from '../_partials/client-info.vue';
import VehicleInfo from '../_partials/vehicle-info.vue';
import AssurenceInfo from '../_partials/assurence-info.vue';

const modal = ref(null)
const props = defineProps({
	reservation: Object
})

const form = useForm({
	client: null,
	dates: null,
	arrival: null,
	puckup: null,
	return: null,
	payment_date: null,
	payment_method: null,
	payment_status: null,
	amount: null,
	vehicle: null,
	assurence: false,
})

const items = [
	{
		label: 'Save & create another',
		command: () => {
			this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
		}
	},
];

const save = () => {
	// form.post($route('merchant.order.store'),  {
	// 	onSuccess: () => {
	// 		modal.value.close()
	// 	}
	// })
}
</script>