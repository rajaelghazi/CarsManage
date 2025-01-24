<template>
    <BaseCard title="Client" class="">
        <div class="flex gap-1">
            <BaseField name="Client" class="flex-1 flex flex-col gap-1" :errors="form.errors">
                <Select v-model="form.client" :options="clients" option-label="name" placeholder="Sélectionner un client"
                    filter />
            </BaseField>
            <Button icon="fi-rr-plus" aria-label="créer un client" variant="outlined" severity="secondary" />
        </div>
        <Divider v-if="form.client" />
        <div v-if="form.client" class="flex flex-col md:flex-row gap-3">
            <div class="flex-1">
                <p class="font-bold">{{ $t('Nom complet') }}</p>
                <p>hassan test</p>
            </div>
            <div class="flex-1">
                <p class="font-bold">{{ $t('CIN') }}</p>
                <p>JB456984</p>
            </div>
            <div class="flex-1">
                <p class="font-bold">{{ $t('Gender') }}</p>
                <p>Male</p>
            </div>
            <div class="flex-1">
                <p class="font-bold">{{ $t('Téléphone') }}</p>
                <p>+212 673343052</p>
            </div>
        </div>
    </BaseCard>
</template>

<script setup>
import { ref } from 'vue';

const form = defineModel();

const clients = ref([
    { name: 'Amina Benkirane', id: 'ABK' },
    { name: 'Mohammed El Fassi', id: 'MEF' },
    { name: 'Fatima Zahra', id: 'FZM' },
    { name: 'Omar El Khattabi', id: 'OEK' },
    { name: 'Leila Bennani', id: 'LBN' }
])
</script>