<template>
	<div class="flex items-center gap-2 text-sm">
		<i class="fi fi-rr-info text-base"></i>
		<p>{{ $t('Learn more about') }}:</p>

		<a :href="link" class="font-medium text-primary">
			<slot></slot>
		</a>
	</div>
</template>

<script setup>
defineProps({
	label: String,
	link: String
})
</script>