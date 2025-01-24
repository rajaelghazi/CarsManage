<template>
	<div class="flex items-center justify-between">
		<div class="grid md:grid-cols-2 gap-2 flex-1">
			<dt class="uppercase text-sm font-semibold">{{ $t('Tax') }}</dt>

			<div class="flex items-center gap-3">
				<BasePopover ref="popup" class="max-w-sm">
					<template #action="{ toggle }">
						<i @click="toggle" class="fi fi-rr-edit text-sm cursor-pointer"></i>
					</template>
	
					<div class="space-y-3">
						<BaseField :errors="form.errors" name="extra_fee_value">
							<BaseInput type="number" label="Value" v-model.number="fee.tax">
								<template #end>%</template>
							</BaseInput>
						</BaseField>
					</div>

					<template #footer>
						<Button @click="apply" :label="$t('Apply')" class="text-xs" size="small" />
					</template>
				</BasePopover>
			
				<span v-if="fee.tax" class="text-zinc-500">{{ form.tax }}%</span>
				<span v-else class="italic text-zinc-400">{{ $t('Not specified') }}</span>
			</div>
		</div>

		<dd class="flex-1 text-right">
			{{ formatPrice(form.tax_value) }}
		</dd>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { formatPrice } from '@scripts/utils'

const form = defineModel()
const popup = ref(null)

const fee = ref({
	tax: form.value.tax,
})

const apply = () => {
	form.value.tax = fee.value.tax
	
	form.value.tax_value = ((form.value.sub_total + form.value.delivery_fee + form.value.extra_fee_value) * fee.value.tax) / 100

	popup.value.close()
}

watch(() => form.value.total, (value) => {
  	apply();
})


</script>