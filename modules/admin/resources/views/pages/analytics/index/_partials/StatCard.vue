<template>
    <Card class="flex-1 border border-surface shadow-none p-4">
        <template #content>
            <div class="flex justify-between gap-8">
                <div class="flex flex-col gap-6">
                    <span class="text-surface-500 dark:text-surface-400 text-sm">{{ data.label }}</span>
                    <div class="flex items-center leading-none">
                        <p class="font-bold text-lg mr-1  ">{{data.value }}</p>
                        <p class="font-medium text-sm text-gray-500 ">{{ data.amount }}</p>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    }
});
</script>