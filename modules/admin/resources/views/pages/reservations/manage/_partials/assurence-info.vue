<template>
	<BaseCard title="Assurence">
		<BaseField name="assurence" :errors="form.errors">
            <Select v-model="form.assurence" :options="assurenceTypes" option-label="name"
                placeholder="Selectionnez un type" />
        </BaseField>
	</BaseCard>
</template>

<script setup>
import { ref } from 'vue'
const form = defineModel();

const assurenceTypes = ref([
	{ name: "Normal", id: 1 },
	{ name: "Tout risque", id: 2 },
])
</script>