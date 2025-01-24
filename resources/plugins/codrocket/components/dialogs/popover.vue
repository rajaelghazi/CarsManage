<template>
	<div>
		<slot :toggle="popup?.toggle" name="action"></slot>

		<Popover ref="popup" class="w-fit max-w-5xl">
			<header v-if="$slots.header" class="py-3 px-4 -mx-3 -mt-3 border-b border-zinc-200">
				<slot name="header"></slot>
			</header>

			<div class="py-2 px-1">
				<slot></slot>
			</div>

			<footer v-if="$slots.footer" class="py-3 px-4 -mx-2 mt-3 -mb-3 border-t border-zinc-200">
				<div class="flex items-center gap-2">
					<Button @click="popup.hide()" :label="$t('Cancel')" severity="secondary" outlined class="text-xs ml-auto" size="small" />
					<slot :close name="footer"></slot>
				</div>
			</footer>
		</Popover>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import Popover from 'primevue/popover'

const popup = ref(null)

const close = () => {
	popup.value.hide()
}

defineExpose({ close })
</script>