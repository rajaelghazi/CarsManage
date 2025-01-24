<template>
	<Step  v-bind="$attrs" v-slot="{ activateCallback, a11yAttrs }" asChild :value="step">
		<button @click="activateCallback" v-bind="a11yAttrs.root" :class="[
			'flex items-center gap-4',
			{ 'line-through italic': passed },
			{ 'opacity-50': !active },
		]">
			<span :class="[
				'rounded-full border-2 size-9 inline-flex items-center justify-center',
				{ 'bg-primary text-primary-contrast border-primary': active },
				{ 'border-surface-200 dark:border-surface-700': !active }
			]">
				<i class="fi" :class="icon" />
			</span>

			<slot :value></slot>
		</button>
	</Step>
</template>

<script setup>
import Step from 'primevue/step';

defineProps({
	title: String,
	step: String,
	icon: String,
	active: Boolean,
	passed: Boolean,
})
</script>