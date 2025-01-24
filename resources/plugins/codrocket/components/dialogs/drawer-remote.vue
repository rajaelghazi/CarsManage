<template>
	<HeadlessModal ref="modal">
		<Drawer @hide="close" v-model:visible="visible" position="bottom" :style="{ height: height }"
			:show-close-icon="false">
			<template #header>
				<header class="flex justify-between items-center w-full pt-2.5 pb-3 px-4">
					<h1 class="font-bold text-xl whitespace-nowrap">{{ $t(title) }}</h1>
					<div class="hidden md:flex w-full sm:flex-1 justify-end gap-2" v-if="$slots.action">
						<Button :label="$t('Cancel')" severity="secondary" variant="outlined" @click="close" />
						<slot :close name="action"></slot>
					</div>

					<button @click="close"
						class="grid place-items-center justify-self-center size-9 hover:bg-surface-100 rounded-lg"
						v-if="!$slots.action || $slots.action && !isDesktop">
						<i class="fi fi-rr-cross p-2"></i>
					</button>
				</header>
			</template>

			<main :class="[width, 'mx-auto md:py-5']" v-bind="$attrs">
				<slot :model="modal"></slot>
			</main>

			<template v-if="$slots.action" #footer>
				<footer class="flex md:hidden justify-between items-center w-full py-5 px-4">
					<div class="flex w-full sm:flex-1 justify-end gap-2">
						<Button class="flex-1" :label="$t('Cancel')" severity="secondary" variant="outlined"
							@click="close" />

						<div class="flex-1">
							<slot :close name="action"></slot>
						</div>
					</div>
				</footer>
			</template>
		</Drawer>
	</HeadlessModal>
</template>

<script setup>
import { ref, computed } from "vue"
import { useWindowSize } from '@vueuse/core'
import { HeadlessModal } from "@inertiaui/modal-vue"
import Drawer from "primevue/drawer"

const props = defineProps({
	title: String,

	height: {
		type: String,
		default: "95dvh",
	},

	width: {
		type: String,
		default: "max-w-6xl",
	},
})

const { width: windowWidth } = useWindowSize()
const isDesktop = computed(() => windowWidth.value >= 768)

const visible = ref(true)
const modal = ref(null)

const close = () => {
	modal.value.close()
	modal.value.afterLeave()
}

const reload = (props) => {
	modal.value.reload({
		only: props,
	})
}

defineExpose({ close, reload })
</script>
