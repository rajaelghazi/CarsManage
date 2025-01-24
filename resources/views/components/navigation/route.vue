<template>
	<li>
		<Link :href="link" :class="[
			'border hover:border-surface-300 hover:dark:border-zinc-700 hover:bg-surface-0 hover:dark:bg-surface-800 z-30 relative flex text-base items-center gap-3 px-3 py-2.5 rounded-border cursor-pointer hover:border-px',
			active ? 'border-surface-300 dark:border-zinc-700 hover:dark:border-zinc-100 bg-surface-0 dark:bg-surface-800 text-surface-800 dark:text-zinc-200' : 'border-transparent text-surface-600 dark:text-zinc-400'
		]">
			<i class="fi" :class="icon"></i>
			
			<span class="flex-1 font-medium">
				<slot></slot>
			</span>
			
			<i v-if="$slots.children" class="fi fi-rr-angle-down text-sm leading-4"></i>
		</Link>

		<div v-if="$slots.children && active" class="relative route-list pl-2 flex flex-col mt-1 opacity-100 overflow-hidden">
			<slot name="children"></slot>
		</div>
	</li>
</template>

<script setup>
const props = defineProps({
	link: String,
	icon: String,
	active: Boolean
})
</script>