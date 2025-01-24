<template>
	<StepItem :value="step">
		<Step v-slot="{ activateCallback, a11yAttrs }" asChild :value="step">
			<div class="flex items-center gap-4" v-bind="a11yAttrs.root">
				<span @click="activateCallback" :class="[
					'rounded-full border-2 size-10 inline-flex items-center justify-center',
					{ 'bg-primary text-primary-contrast border-primary': active, 'border-surface-200 dark:border-surface-700': !active }
				]">
					<i class="fi" :class="icon" />
				</span>
	
				<strong class="font-bold text-lg">{{ title }}</strong>
			</div>
		</Step>

		<StepPanel v-slot="{ activateCallback }">
			<slot :next="activateCallback" :step></slot>
		</StepPanel>
	</StepItem>
</template>

<script setup>
defineProps({
	title: String,
	step: String,
	icon: String,
	active: Boolean
})
</script>