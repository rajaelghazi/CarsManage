<template>
	<div class="flex items-center justify-between">
		<div class="grid md:grid-cols-2 gap-2 flex-1">
			<dt class="uppercase text-sm font-semibold">{{ $t('Sub total') }}</dt>
			<span class="text-zinc-500 font-medium">
				{{ $t('1 vehicule, 2 jours') }}
			</span>
		</div>

		<dd class="flex-1 text-right">
			{{ formatPrice(form.sub_total) }} 
		</dd>
	</div>
</template>

<script setup>
import { formatPrice } from '@scripts/utils'

const form = defineModel()
</script>