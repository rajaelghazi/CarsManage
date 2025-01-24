<template>
	<Dialog v-model:visible="visible" modal :draggable="false" v-bind="$attrs" class="max-w-xl w-full" :show-close-icon="false">
        <template #header>
            <header class="flex justify-between items-center w-full pt-2.5 pb-3 px-5 dark:bg-surface-900 dark:text-surface-300 rounded-t-xl">
                <h1 class="font-bold text-xl">{{ $t(title) }}</h1>

                <button @click="visible = false" class="grid place-items-center justify-self-center size-9 hover:bg-surface-100 rounded-lg">
                    <i class="fi fi-rr-cross p-2"></i>
                </button>
            </header>
        </template>

        <main class="mx-auto" v-bind="$attrs">
			<slot></slot>
		</main>

        <template v-if="$slots.action" #footer>
            <footer class="flex bg-white rounded-3xl justify-between items-center w-full py-4 px-5 dark:bg-surface-900 dark:text-surface-300 rounded-t-xl">
                <div class="flex gap-2 ml-auto">
                    <Button :label="$t('Cancel')" severity="secondary" variant="outlined" @click="visible = false" />
                    <slot name="action"></slot>
                </div>
            </footer>
        </template>
        <template #footer>
            <footer class="flex bg-white rounded-3xl justify-between items-center w-full py-4 px-5 dark:bg-surface-900 dark:text-surface-300 rounded-t-xl">
                <div class="flex gap-2 ml-auto">
                    <slot name="footer"></slot>
                </div>
            </footer>
        </template>
	</Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog';

const visible = defineModel()
const props = defineProps({
	title: String
})
</script>