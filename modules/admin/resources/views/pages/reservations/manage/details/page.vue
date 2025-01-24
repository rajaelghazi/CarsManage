<template>
	<BaseDrawerRemote ref="modal" title="Reservation Details">

		<div class="grid items-start grid-cols-1 md:grid-cols-5 gap-5">
			<div class="col-span-1 md:col-span-3 space-y-5">
				<BaseCard title="Client">
					<div class="flex gap-3">
						<div class="flex-1">
							<p class="font-bold">Full name</p>
							<p>hassan test</p>
						</div>
						<div class="flex-1">
							<p class="font-bold">CIN</p>
							<p>JB456984</p>
						</div>
						<div class="flex-1">
							<p class="font-bold">Gender</p>
							<p>Male</p>
						</div>
						<div class="flex-1">
							<p class="font-bold">Phone</p>
							<p>+212 673343052</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard title="Reservation details">
					<div class="flex flex-col gap-3">
						<div>
							<p class="font-bold">Duration:</p>
							<p>15 Jours</p>
						</div>
						<div class="flex gap-3">
							<div class="flex-1 flex gap-3 items-start">
								<div>
									<p class="font-bold">Depart</p>
									<p>01/01/2025</p>
								</div>
								<div>
									<p class="font-bold">Location</p>
									<p>Agadir Al Massira Airport</p>
								</div>
							</div>
							<i class="fi fi-rr-arrow-right flex items-center"></i>
							<div class="flex-1 flex gap-3">
								<div>
									<p class="font-bold">Return</p>
									<p>15/01/2025</p>
								</div>
								<div>
									<p class="font-bold">Location</p>
									<p>Casablanca Mohammed V International Airport</p>
								</div>
							</div>
						</div>
					</div>
				</BaseCard>

				<BaseCard title="Vehicule Details">
					<div class="flex gap-10 items-center">
						<div class="flex gap-3 items-center">
							<img class="w-12 h-12 object-cover rounded-xl"
								src="https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/sandero/sandero-bji/sandero-bji-ph1/edito-2560-x-1440/dacia-sandero-bji-ph1-001.jpg.ximg.large.webp/34b9770af8.webp"
								alt="">
							<div>
								<p class="font-bold">Vehicle:</p>
								<p>Dacia Sandero</p>
							</div>
						</div>
						<div>
							<p class="font-bold">Matricule:</p>
							<p dir="rtl" class="text-left">33|أ|1995</p>
						</div>
						<div>
							<p class="font-bold">Color:</p>
							<p>Red</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard title="Payment Details">
					<dl class="space-y-3 dark:text-zinc-300">
						<div class="flex items-center justify-between">
							<div class="grid md:grid-cols-2 gap-2 flex-1">
								<dt class="uppercase text-sm font-semibold">{{ $t('Sub total') }}</dt>
								<span class="text-zinc-500 font-medium">
									{{ $t('1 vehicule, 2 jours') }}
								</span>
							</div>

							<dd class="flex-1 text-right">
								{{ formatPrice(600) }}
							</dd>
						</div>
						<div class="flex items-center justify-between">
							<div class="grid md:grid-cols-2 gap-2 flex-1">
								<dt class="uppercase text-sm font-semibold">{{ $t('Delivery') }}</dt>
							</div>

							<div class="flex items-center gap-2">
								<dd class="flex-1 text-right">
									{{ formatPrice(50) }}
								</dd>
							</div>

						</div>
						<div class="grid md:grid-cols-2 gap-2 flex-1">
							<dt class="uppercase text-sm font-semibold">{{ $t('Extra fees') }}</dt>

							<dd class="flex-1 text-right">
								{{ formatPrice(10) }}
							</dd>
						</div>

						<div class="flex items-center justify-between">
							<dt class="uppercase text-sm font-semibold">{{ $t('Tax') }}</dt>

							<dd class="flex-1 text-right">
								{{ formatPrice(10) }}
							</dd>
						</div>
					</dl>
					<template #footer>
						<div class="flex font-bold items-center justify-between">
							<dt class="uppercase text-sm font-semibold">{{ $t('Total') }}</dt>
							<dd class="text-lg">{{ formatPrice(670) }}</dd>
						</div>
					</template>
				</BaseCard>
			</div>

			<div class="col-span-1 md:col-span-2 space-y-5">
				<BaseCard title="Assurence">
					<template #end>
						<Tag severity="success" value="Tout risque" class="ml-auto"></Tag>
					</template>
				</BaseCard>

				<BaseCard title="Payment information">
					<div class="space-y-3">
						<div class="space-y-1">
							<p class="font-bold">Payment date</p>
							<p>11/01/2025</p>
						</div>
						<div class="space-y-1">
							<p class="font-bold">Method de payment</p>
							<p>Cash</p>
						</div>
						<div class="space-y-1">
							<p class="font-bold">Status de payment</p>
							<Tag severity="danger" value="Not paid" fluid></Tag>
						</div>
						<div class="space-y-1">
							<p class="font-bold">Amount</p>
							<p>600 Dhs</p>
						</div>
					</div>
				</BaseCard>
			</div>
		</div>
	</BaseDrawerRemote>
</template>

<script setup>
import { ref } from 'vue'
import { useForm } from '@inertiajs/vue3';
import { formatPrice } from '@scripts/utils'
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