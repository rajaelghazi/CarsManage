<template>
    <Drawer v-model:visible="visible" position="bottom" :style="{ height: size }" :show-close-icon="false">
        <template #header>
            <header class="flex justify-between items-center w-full pt-2.5 pb-3 px-4">
                <h1 class="font-bold text-xl whitespace-nowrap">{{ $t(title) }}</h1>

                <div class="flex w-full sm:flex-1 justify-end gap-2" v-if="$slots.action">
                    <Button :label="$t('Cancel')" severity="secondary" variant="outlined" @click="visible = false" />
                    <slot name="action"></slot>
                </div>

                <button v-else @click="visible = false"
                    class="grid place-items-center justify-self-center size-9 hover:bg-surface-100 rounded-lg">
                    <i class="fi fi-rr-cross p-2"></i>
                </button>
            </header>
        </template>

        <main :class="[width, 'mx-auto']" v-bind="$attrs">
            <slot></slot>
        </main>
    </Drawer>
</template>

<script setup>
import Drawer from 'primevue/drawer'

const visible = defineModel()
const props = defineProps({
    title: String,

    size: {
        type: String,
        default: '95vh'
    },

    width: {
        type: String,
        default: 'max-w-8xl'
    }
})
</script>