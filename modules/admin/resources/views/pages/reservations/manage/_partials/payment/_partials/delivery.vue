<template>
	<div class="flex items-center justify-between">
		<div class="grid md:grid-cols-2 gap-2 flex-1">
			<dt class="uppercase text-sm font-semibold">{{ $t('Delivery') }}</dt>
		</div>

		<div class="flex items-center gap-2">
			<BasePopover ref="popup" class="max-w-sm">
				<template #action="{ toggle }">
					<i @click="toggle" class="fi fi-rr-edit text-sm cursor-pointer"></i>
				</template>
	
				<div class="space-y-3">
					<BaseField :errors="form.errors" name="discount">
						<BaseInput type="number" label="Value" v-model.number="fee.delivery_fee" />
					</BaseField>
				</div>
	
				<template #footer>
					<Button @click="apply" :label="$t('Apply')" class="text-xs" size="small" />
				</template>
			</BasePopover>

			<dd class="flex-1 text-right">
				{{ formatPrice(form.delivery_fee) }}
			</dd>
		</div>

	</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { formatPrice } from '@scripts/utils'

const form = defineModel()

const popup = ref(null)

const fee = ref({
	delivery_fee: form.value.delivery_fee
})

const apply = () => {
	form.value.delivery_fee = fee.value.delivery_fee
	
	popup.value.close()
}

watch(() => form.value.sub_total, (value) => {
	apply()
})
</script>