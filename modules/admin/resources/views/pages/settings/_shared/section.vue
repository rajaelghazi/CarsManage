<template>
	<section class="space-y-6">
		<div class="flex items-center gap-5">
			<i @click="$emit('close')" class="fi fi-rr-arrow-left text-xl md:hidden"></i>
			<h1 class="font-bold text-2xl">{{ $t(title) }}</h1>
		</div>

		<div class="space-y-5">
			<slot></slot>
		</div>
	</section>
</template>

<script setup>
defineProps({
	title: String
})
</script>