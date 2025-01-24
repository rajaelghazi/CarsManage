<template>
    <BaseCard title="Détails supplémentaires" class="space-y-4">
      <BaseField name="year" label="Année de fabrication" :errors="form.errors">
        <BaseLabel for="year">{{ $t('Année de fabrication') }}</BaseLabel>
        <InputNumber v-model="form.year" placeholder="Entrez l'année" />
      </BaseField>
      <BaseField name="mileage" label="Kilométrage en km" :errors="form.errors">
        <BaseLabel for="mileage">{{ $t('Kilométrage en km') }}</BaseLabel>
        <InputNumber v-model="form.mileage" placeholder="Entrez le kilométrage" />
      </BaseField>
      <BaseField name="numberOfSeats" label="Nombre de sièges" :errors="form.errors">
        <BaseLabel for="numberOfSeats">{{ $t('Nombre de sièges') }}</BaseLabel>
        <InputNumber v-model="form.numberOfSeats" placeholder="Entrez le nombre de sièges" />
      </BaseField>
      <BaseField name="numberOfDoors" label="Nombre de portes" :errors="form.errors">
        <BaseLabel for="numberOfDoors">{{ $t('Nombre de portes') }}</BaseLabel>
        <InputNumber v-model="form.numberOfDoors" placeholder="Entrez le nombre de portes" />
      </BaseField>
    </BaseCard>
  </template>
  
  <script setup>
  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
  });
  </script>
