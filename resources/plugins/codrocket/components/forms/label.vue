<template>
	<label class="text-sm font-medium flex items-center gap-2" v-bind="$attrs">
		<slot></slot>
		<span class="text-red-500" v-if="required">*</span>
	</label>
</template>

<script setup>
defineProps({
	required: Boolean
})
</script>