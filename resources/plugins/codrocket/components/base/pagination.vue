<template>
	<div class="flex items-center gap-4 justify-between">
		<div class="flex flex-1 justify-between sm:hidden">
			<a href="#"
				class="relative inline-flex items-center rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-zinc-500 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
			<a href="#"
				class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
		</div>

		<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
			<p class="text-sm text-gray-700 dark:text-zinc-300">
				Showing <span class="font-medium">{{ meta.from }}</span>
				to <span class="font-medium">{{ meta.to }}</span>
				of <span class="font-medium">{{ meta.total }}</span>
				results
			</p>

			<nav v-if="meta.per_page < meta.total" class="isolate inline-flex gap-4 rounded-md shadow-sm group"
				aria-label="Pagination">
				<template v-for="link in meta.links" :key="link.url">
					<Link class="relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg "
						:class="[link.active ? 'bg-primary text-white' : 'text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20 focus:outline-offset-0', { 'text-zinc-400 pointer-events-none': link.url == null }]"
						:href="link.url">
						<span v-html="link.label"></span>
					</Link>
				</template>
			</nav>
		</div>

 		<Select :options="perPage" v-model="selected" @change="$emit('perpage')" class="w-20" size="small" />
	</div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(10)
const perPage = [1, 10, 20, 50, 100, 200];

const props = defineProps({
	meta: Object
})
</script>