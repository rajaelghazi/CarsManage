<template>
	<Card class="shadow-none border dark:border-zinc-700 dark:bg-zinc-900 relative">
		<template v-if="title" #header>
			<header :class="[
				'px-5 py-4 flex gap-4 dark:text-surface-300 dark:border-zinc-700',
				description ? 'items-start' : 'items-center', { 'border-b': $slots.default }
			]">
				<slot name="start" v-if="$slots.start"></slot>

				<i v-if="icon" class="fi text-base" :class="icon"></i>

				<div class="space-y-1">
					<h1 class="font-bold text-base leading-none capitalize">{{ $t(title) }}</h1>
					<p v-if="description" class="text-zinc-500 text-sm">{{ $t(description) }}</p>
				</div>

				<slot name="end" v-if="$slots.end"></slot>
			</header>
		</template>

		<template #content v-if="$slots.default">
			<main class="dark:text-surface-300 p-5" v-bind="$attrs">
				<slot></slot>
			</main>
		</template>

		<template v-if="$slots.footer" #footer>
			<footer class="px-5 py-4 border-t dark:border-zinc-700 -mt-2">
				<slot name="footer"></slot>
			</footer>
		</template>
	</Card>
</template>

<script setup>
import Card from 'primevue/card';

const props = defineProps({
	icon: String,
	title: String,
	description: String
})
</script>
