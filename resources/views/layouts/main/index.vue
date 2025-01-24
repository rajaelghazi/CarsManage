<template>
	<div class="h-full bg-muted dark:bg-zinc-950 dark:bg- min-h-screen">
		<div class="relative z-50" role="dialog" aria-modal="true">
			<Transition appear-active-class="transition-opacity ease-linear duration-300"
				leave-active-class="transition-opacity ease-linear duration-300" appear-from-class="opacity-0"
				appear-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
				<div v-if="open" class="fixed lg:hidden inset-0 bg-gray-900/80" aria-hidden="true"></div>
			</Transition>

			<Transition enter-active-class="transition ease-in-out duration-300 transform"
				leave-active-class="transition ease-in-out duration-300 transform" enter-from-class="-translate-x-full"
				enter-to-class="translate-x-0" leave-from-class="translate-x-0" leave-to-class="-translate-x-full">
				<div v-show="open" class="absolute h-screen flex w-full max-w-xs flex-1">
					<div class="absolute lg:hidden left-full top-0 flex w-16 justify-center pt-5">
						<button @click="open = false" type="button" class="-m-2.5 p-2.5">
							<span class="sr-only">Close sidebar</span>
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
								stroke="currentColor" aria-hidden="true" data-slot="icon">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					<slot name="sidebar"></slot>
				</div>
			</Transition>
		</div>

		<div class="lg:ltr:pl-80 lg:rtl:pr-80 flex flex-col lg:rtl:pl-0 h-screen max-h-screen overflow-y-auto">
			<TopBar @open="open = true" />
			<Breadcrumps />
			<Toast class="mt-14" />

			<main class="p-5 sm:px-6 lg:p-6 flex flex-col h-auto flex-1">
				<div class="flex-1">
					<slot></slot>
				</div>

			</main>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { router } from '@inertiajs/vue3'
import { useWindowSize } from '@vueuse/core'
import { notify } from '@scripts/utils';

import { TopBar, Breadcrumps } from './_partials';

const { width } = useWindowSize()
const open = ref(true)

watch(width, (value) => {
	const isMobile = value <= 500
	
	open.value = !isMobile
	isMobile && router.on('finish', () => open.value = false)
}, { immediate: true })

onMounted(notify)

</script>