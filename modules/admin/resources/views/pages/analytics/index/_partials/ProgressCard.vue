<template>
    <Card class="flex-1 border border-surface shadow-none p-5">
        <template #content>
            <div class="flex flex-col gap-4">
                <span class="text-surface-500 dark:text-surface-400 text-sm">{{ data.label }}</span>

                <div class="flex flex-col gap-2">
                    <div class="flex justify-between items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                        <span>{{ data.value }}/{{ data.value2 }}</span>
                        <span>{{ ((data.value / data.value2) * 100).toFixed(2) }}%</span>
                    </div>

                    <div class="relative w-full h-2 bg-gray-200 rounded">
                        <div
                            class="absolute h-2 rounded"
                            :style="{
                                'background-color': data.color1,
                                width: `${(data.value / data.value2) * 100}%`
                            }"
                        ></div>
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
