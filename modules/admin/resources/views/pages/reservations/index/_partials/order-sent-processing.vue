
<template>
    <div class="card flex justify-center">
        <Toast position="top-right" group="headless" @close="visible = false">
            <template #container="{ message, closeCallback }">
                <section class="flex flex-col p-4 gap-4 w-full bg-white border shadow-sm text-zinc-500 rounded-xl">
                    <div class="flex items-center gap-3">
                        <i class="fi fi-rr-paper-plane text-xl"></i>
                        <span class="font-bold text-base">{{ message.summary }}</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <ProgressBar :value="progress" :showValue="false" class="h-1"></ProgressBar>
                        <label class="text-sm font-bold">{{ progress }}% sent</label>
                    </div>
                </section>
            </template>
        </Toast>
        <Button @click="show" label="View" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { ref, onUnmounted } from 'vue';
const toast = useToast();
const visible = ref(false);
const progress = ref(0);
const interval = ref();

onUnmounted(() => {
    if (interval.value) {
        clearInterval(interval.value);
    }
})

const show = () => {
    if (!visible.value) {
        toast.add({ severity: 'custom', summary: 'Sending orders', group: 'headless', styleClass: 'backdrop-blur-lg rounded-2xl' });
        visible.value = true;
        progress.value = 0;

        if (interval.value) {
            clearInterval(interval.value);
        }

        interval.value = setInterval(() => {
            if (progress.value <= 100) {
                progress.value = progress.value + 20;
            }

            if (progress.value >= 100) {
                progress.value = 100;
                clearInterval(interval.value);
            }
        }, 1000);
    }
};
</script>
