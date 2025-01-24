<template>
	<HeadlessModal ref="modal">
		<Dialog @hide="close" v-model:visible="visible" modal :draggable="false" v-bind="$attrs" class="max-w-xl w-full" :show-close-icon="false">
			<template #header>
				<header class="flex justify-between items-center w-full pt-2.5 pb-3 px-5">
					<h1 class="font-bold text-xl">{{ $t(title) }}</h1>

					<button @click="visible = false" class="grid place-items-center justify-self-center size-9 hover:bg-surface-100 rounded-lg">
						<i class="fi fi-rr-cross p-2"></i>
					</button>
				</header>
			</template>

			<main class="max-w-8xl mx-auto" v-bind="$attrs">
				<slot :close :modal="modal"></slot>
			</main>

			<template v-if="$slots.action" #footer>
				<footer class="flex bg-white rounded-3xl justify-between items-center w-full py-4 px-5 dark:bg-surface-900 dark:text-surface-300 rounded-t-xl">
					<div class="flex gap-2 ml-auto">
						<Button :label="$t('Cancel')" severity="secondary" variant="outlined" @click="visible = false" />
						<slot name="action"></slot>
					</div>
				</footer>
			</template>
		</Dialog>
	</HeadlessModal>
</template>

<script setup>
import { ref, provide } from "vue"
import Dialog from 'primevue/dialog'
import { HeadlessModal } from "@inertiaui/modal-vue"

const props = defineProps({
	title: String,

	height: {
		type: String,
		default: "95dvh",
	},

	width: {
		type: String,
		default: "max-w-8xl",
	},
})

const visible = ref(true)
const modal = ref(null)

const close = () => {
	modal.value.close()
	modal.value.afterLeave()
}

defineExpose({ close })
</script>
