<template>
    <BaseCard title="Informations principales" class="space-y-4">
      <BaseField name="brand" label="Marque du véhicule" :errors="form.errors">
        <BaseLabel for="brand">{{ $t('Marque') }}</BaseLabel>
        <InputText v-model="form.brand" placeholder="Entrez la marque" />
      </BaseField>
      <BaseField name="fuelType" label="Type de carburant" :errors="form.errors">
        <BaseLabel for="fuelType">{{ $t('Type de carburant') }}</BaseLabel>
        <Select v-model="form.fuelType" :options="fuelTypes" placeholder="Choisissez un type de carburant" />
      </BaseField>
      <BaseField name="transmission" label="Transmission" :errors="form.errors">
        <BaseLabel for="transmission">{{ $t('Transmission') }}</BaseLabel>
        <Select v-model="form.transmission" :options="transmissions" placeholder="Choisissez une transmission" />
      </BaseField>
      <BaseField name="licencePlate" label="Plaque d'immatriculation" :errors="form.errors">
        <BaseLabel for="licencePlate">{{ $t('Plaque d\'immatriculation') }}</BaseLabel>
        <InputText v-model="form.licencePlate" placeholder="Entrez la plaque d'immatriculation" />
      </BaseField>
      <BaseField name="color" label="Couleur du véhicule" :errors="form.errors">
        <BaseLabel for="color">{{ $t('Couleur du véhicule') }}</BaseLabel>
        <InputText v-model="form.color" placeholder="Entrez la couleur" />
      </BaseField>
    </BaseCard>
  </template>
  
  <script setup>
  const fuelTypes = ['Essence', 'Diesel', 'Électrique', 'Hybride'];
  const transmissions = ['Manuelle', 'Automatique'];
  
  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
  });
  </script>
  