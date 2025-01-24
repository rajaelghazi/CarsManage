<template>
	<div class="flex items-center justify-between">
		<div class="grid md:grid-cols-2 gap-2 flex-1">
			<dt class="uppercase text-sm font-semibold">{{ $t('Extra fees') }}</dt>

			<div class="flex items-center gap-3">
				<BasePopover ref="popup" class="max-w-sm">
					<template #action="{ toggle }">
						<i @click="toggle" class="fi fi-rr-edit text-sm cursor-pointer"></i>
					</template>
	
					<div class="space-y-3">
						<BaseField :errors="form.errors" name="extra_fee_reason">
							<BaseInput label="Reason" v-model="fee.extra_fee_reason" />
						</BaseField>
		
						<BaseField :errors="form.errors" name="extra_fee_value">
							<BaseInput type="number" label="Value" v-model.number="fee.extra_fee_value" />
						</BaseField>
					</div>

					<template #footer>
						<Button @click="apply" :label="$t('Apply')" class="text-xs" size="small" />
					</template>
				</BasePopover>
			
				<span v-if="form.extra_fee_reason" class="text-zinc-500">{{ form.extra_fee_reason }}</span>
				<span v-else class="italic text-zinc-400">{{ $t('Not specified') }}</span>
			</div>
		</div>

		<dd class="flex-1 text-right">
			{{ formatPrice(form.extra_fee_value) }}
		</dd>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { formatPrice } from '@scripts/utils'

const form = defineModel()
const popup = ref(null)
const fee = ref({
	extra_fee_reason: form.value.extra_fee_reason,
	extra_fee_value: form.value.extra_fee_value
})

const apply = () => {
	form.value.extra_fee_reason = fee.value.extra_fee_reason
	form.value.extra_fee_value = fee.value.extra_fee_value
	
	popup.value.close()
}
</script>