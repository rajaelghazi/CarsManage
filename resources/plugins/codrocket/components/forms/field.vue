<template>
	<FormField :name="name" class="flex flex-col gap-2" v-bind="$attrs">
		<slot></slot>

		<Message v-if="name in errors" severity="error" size="small" variant="simple">
			{{ errors[name] }}
		</Message>
	</FormField>
</template>

<script setup>
defineProps({
	errors: Object,

	name: {
		type: String,
		required: true
	},
})
</script>