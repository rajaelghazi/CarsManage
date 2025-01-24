<template>
	<BaseCard>
		<div class="space-y-2">
			<div class="flex justify-between items-center">
				<div class="flex items-center gap-3">
					<div v-if="icon" :class="`${iconBg} p-2 rounded-lg flex items-center justify-center`">
						<i :class="`${iconColor} text-2xl ${icon}`" />
					</div>
					<p>{{ label }}</p>
				</div>
				<div v-if="percentage" class="flex items-center">
					<span class="text-gray-500 text-sm">{{ percentage }}%</span>
					<i v-if="trend && trend == 'down'" class="fi fi-rr-arrow-small-down text-red-500"></i>
					<i v-if="trend && trend == 'up'" class="fi fi-rr-arrow-small-up text-green-500"></i>
				</div>
			</div>

			<div class="flex items-center  -mb-1 leading-none">
				<p class="font-medium text-2xl mr-1  ">{{ value }}</p>
				<p class="font-medium text-sm text-gray-500 ">{{ amount }}</p>
			</div>
		</div>
	</BaseCard>
</template>

<script setup>
defineProps({
	label: String,
	icon: String,
	iconBg: {
		type: String,
		default: 'bg-primary/10',
	},
	iconColor: {
		type: String,
		default: 'text-primary',
	},
	value: [String, Number],
	amount: String,
	percentage: String,
	trend: String,
});
</script>
