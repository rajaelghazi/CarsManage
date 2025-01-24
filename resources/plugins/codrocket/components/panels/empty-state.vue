<template>
	<BaseCard class="flex items-center flex-col py-5">
		<i :class="icon" class="fi mx-auto mb-3 block text-gray-400 text-3xl"></i>

		<h2 class="mt-2 text-base font-semibold text-gray-900">{{ title }}</h2>
		<p v-if="description" class="mt-1 text-sm text-gray-500 mx-auto">
			{{ description }}
		</p>

		<div v-if="$slots.default" class="mt-7">
			<slot></slot>
		</div>
	</BaseCard>
</template>

<script setup>
defineProps({
	icon: {
		type: String,
		default: 'fi-rr-inbox'
	},
	
	title: {
		type: String,
		default: "No data found"
	},
	description: String,
})
</script>