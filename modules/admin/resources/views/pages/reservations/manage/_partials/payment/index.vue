<template>
	<BaseCard title="Payments">
		<dl class="space-y-3 dark:text-zinc-300">
			<SubTotal v-model="form" />
			<Delivery v-model="form" />

			<!-- <div class="flex items-center justify-between">
				<dt class="uppercase text-sm font-semibold">{{ $t('Discount') }}</dt>

				<dd class="flex-1 text-right">
					{{ formatPrice(form.discount_value) }}
				</dd>
			</div> -->

			<ExtrasFees v-model="form" />
			<Tax v-model="form" />
		</dl>

		<template #footer>
			<div class="flex font-bold items-center justify-between">
				<dt class="uppercase text-sm font-semibold">{{ $t('Total') }}</dt>
				<dd class="text-lg">{{ formatPrice(form.total) }}</dd>
			</div>
		</template>
	</BaseCard>
</template>

<script setup>
import { ref, watch } from "vue";
import { formatPrice } from '@scripts/utils'

import Tax from './_partials/tax.vue'
import SubTotal from './_partials/sub-total.vue'
import Delivery from "./_partials/delivery.vue";
import ExtrasFees from './_partials/extra-fees.vue'

const form = defineModel()

const total = () => {
	form.value.total = form.value.sub_total + form.value.delivery_fee + form.value.extra_fee_value + form.value.tax_value;
}

watch([() => form.value.sub_total, () => form.value.delivery_fee, () => form.value.extra_fee_value], (values) => {
	total()
})


// watch(() => form.value.sub_total, (value) => {
// 	form.value.total = value + form.value.delivery_fee + form.value.tax_value + form.value.extra_fee_value - form.value.discount_value;
// })

// watch(() => form.value.delivery_fee, (value) => {
// 	form.value.total = value + Number(form.value.sub_total)
// })

// watch(() => form.value.extra_fee_value, (value) => {
// 	form.value.total = value + Number(form.value.sub_total) + form.value.delivery_fee
// })
// watch(() => form.value.tax_value, (value) => {
// 	form.value.total = value + Number(form.value.total)
// })


// watch(() => form.value.discount_value, (value) => {
// 	form.value.total = Number(form.value.total) - value
// })


</script>