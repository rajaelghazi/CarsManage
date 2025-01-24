<template>
	<BaseCard>

		<div class="space-y-2">
			<div class="flex items-center gap-3">
				<div v-if="icon" :class="`${iconBg} p-2 rounded-lg flex items-center justify-center`">
					<i :class="`${iconColor} text-2xl ${icon}`" />
				</div>
				<p>{{ label }}</p>
			</div>
			<div>
				<div class="flex items-center justify-between pb-1">
					<div class="font-medium tracking-wide flex items-end gap-0.5">
						<span class="text-2xl leading-7">{{ value }}</span>
						<span>/</span>
						<span>{{ total }}</span>
					</div>
					<span class="font-medium text-gray-600">{{ percentage }}%</span>
				</div>
				<ProgressBar :value="percentage" :showValue="false" :pt="{
					value: { class: barColor }
				}" style="height: 5px;"></ProgressBar>
			</div>
		</div>

	</BaseCard>
</template>

<script setup>
import { Card } from 'primevue';
defineProps({
	label: String,
	icon: String,
	iconBg: {
		type: String,
		default: 'bg-primary/10'
	},
	iconColor: {
		type: String,
		default: 'text-primary'
	},
	barColor: {
		type: String,
		default: 'text-primary'
	},
	value: String,
	total: String,
	amount: String,
	percentage: String,
	trend: String
})
</script>