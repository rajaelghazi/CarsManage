<template>
	<div class="space-y-2">
		<BaseLabel v-if="label" text="Name" for="name" :required>
			{{ $t(label) }}
		</BaseLabel>

		<InputGroup>
			<InputGroupAddon v-if="$slots.start">
				<slot name="start"></slot>
			</InputGroupAddon>

			<InputText v-bind="$attrs" v-model="model" fluid />

			<InputGroupAddon v-if="$slots.end">
				<slot name="end"></slot>
			</InputGroupAddon>
		</InputGroup>
	</div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

const model = defineModel()
const props = defineProps({
	label: String,
	
	required: {
		type: Boolean,
		default: false
	}
})
</script>