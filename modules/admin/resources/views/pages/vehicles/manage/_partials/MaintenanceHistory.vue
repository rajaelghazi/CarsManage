<template>
    <div class="w-full">
        <div v-for="(item, index) in maintenanceHistory" :key="index" class="space-y-2 w-full mb-2">
            <div class="flex space-x-3 w-full">
                <InputText v-model="item.date" placeholder="Entrez la date" class="w-1/2"/>
                <InputText v-model="item.description" placeholder="Entrez la description" class="w-1/2" />
                <button @click="removeHistory(index)" class="text-red-500">
                    <i class="fi fi-rr-cross-circle text-xl"></i>
                </button>
            </div>
        </div>
        <button @click="addHistory" class=" text-sm text-blue-500">
            <i class="fi fi-rr-plus-circle text-xl"></i> Ajouter une maintenance
        </button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    modelValue: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const maintenanceHistory = ref([...props.modelValue]);

const addHistory = () => {
    maintenanceHistory.value.push({ date: '', description: '' });
};

const removeHistory = (index) => {
    maintenanceHistory.value.splice(index, 1);
};

watch(maintenanceHistory, (newValue) => {
    emit('update:modelValue', newValue);
});
</script>