<template>
	<section class="space-y-5">
		<div class="flex items-center gap-3">
			<Link v-if="backlink" :href="backlink">
				<i class="fi fi-rr-arrow-small-left text-2xl"></i>
			</Link>
			<h1 class="text-xl font-bold leading-none dark:text-zinc-300">{{ $t(title) }}</h1>
			<slot v-if="$slots.header" name="header"></slot>
		</div>

		<div>
			<slot></slot>
		</div>
	</section>
</template>

<script setup>
defineProps({
	title: String,
	backlink: String
})
</script>