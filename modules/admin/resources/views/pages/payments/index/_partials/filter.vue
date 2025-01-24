<template>
  <div class="min-w-60 md:min-w-80 space-y-3">
    <div class="flex flex-col gap-2">
      <BaseLabel for="paymentType">{{ $t('Type de Paiement') }}</BaseLabel>
      <Select :options="paymentTypes" option-label="label" placeholder="Sélectionner le Type de Paiement" filter fluid v-model="filters.paymentType" />
    </div>

    <div class="flex flex-col gap-2">
      <BaseLabel for="reservationId">{{ $t('ID de Réservation') }}</BaseLabel>
      <InputText v-model="filters.reservationId" placeholder="Entrer l'ID de Réservation" />
    </div>

    <div class="flex flex-col gap-2">
      <BaseLabel for="status">{{ $t('Statut') }}</BaseLabel>
      <Select :options="paymentStatuses" option-label="label" placeholder="Sélectionner le Statut" filter fluid v-model="filters.status" />
    </div>

    <div class="flex flex-col gap-2">
      <BaseLabel for="dateRange">{{ $t('Plage de Dates') }}</BaseLabel>
      <DatePicker v-model="filters.dateRange" selectionMode="range" :manualInput="false" showButtonBar showIcon iconDisplay="input" placeholder="Sélectionner la Plage de Dates" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const paymentStatuses = ref([
  { label: "Payé", value: "Payé" },
  { label: "Partiellement Payé", value: "Partiellement Payé" },
  { label: "En Attente", value: "En Attente" },
  { label: "Annulé", value: "Annulé" },
]);

const paymentTypes = ref([
  { label: "Carte de Crédit", value: "Carte de Crédit" },
  { label: "PayPal", value: "PayPal" },
  { label: "Virement Bancaire", value: "Virement Bancaire" },
  { label: "Espèces", value: "Espèces" },
  { label: "Carte de Débit", value: "Carte de Débit" },
]);

const filters = ref({
  paymentType: "",
  reservationId: "",
  status: "",
  dateRange: null,
});
</script>
