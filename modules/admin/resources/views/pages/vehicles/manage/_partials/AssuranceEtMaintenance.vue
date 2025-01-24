<template>
    <BaseCard title="Assurance et maintenance" class="space-y-4">
      <BaseField name="insuranceCompany" label="Compagnie d'assurance" :errors="form.errors">
        <BaseLabel for="insuranceCompany">{{ $t('Compagnie d\'assurance') }}</BaseLabel>
        <InputText v-model="form.insurance.company" placeholder="Entrez le nom de la compagnie" />
      </BaseField>
      <BaseField name="insuranceExpiration" label="Date d'expiration de l'assurance" :errors="form.errors">
        <BaseLabel for="insuranceExpiration">{{ $t('Date d\'expiration de l\'assurance') }}</BaseLabel>
        <DatePicker v-model="form.insurance.expirationDate" placeholder="Choisissez une date" />
      </BaseField>
      <BaseField name="maintenanceHistory" label="Historique de maintenance" :errors="form.errors">
        <BaseLabel for="maintenanceHistory">{{ $t('Historique de maintenance') }}</BaseLabel>
        <MaintenanceHistory v-model="form.maintenanceHistory" />
      </BaseField>
    </BaseCard>
  </template>
  
  <script setup>
  import MaintenanceHistory from './MaintenanceHistory.vue';
  
  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
  });
  </script>
  