<template>
	<div class="space-y-1 mb-5">
		<h3 @click="expanded = !expanded" class="flex py-1 px-2 items-center gap-3 cursor-pointer">
			<span class="text-xs uppercase text-gray-500 font-medium">{{ label }}</span>
		</h3>

		<ul v-if="expanded" class="text-sm font-medium">
			<slot></slot>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const { expand } = defineProps({
	label: String,
	expand: {
		type: Boolean,
		default: false
	}
})

const expanded = ref(expand)
</script>