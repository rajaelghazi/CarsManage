<template>
	<div class="min-w-60 md:min-w-80 space-y-3">
	  <div class="flex flex-col gap-2">
		<BaseLabel for="customerId">{{ $t('ID Client') }}</BaseLabel>
		<InputText v-model="filters.customerId" placeholder="Entrez l'ID du client" />
	  </div>
  
	  <div class="flex flex-col gap-2">
		<BaseLabel for="customerName">{{ $t('Nom du Client') }}</BaseLabel>
		<InputText v-model="filters.customerName" placeholder="Entrez le nom du client" />
	  </div>
  
	  <div class="flex flex-col gap-2">
		<BaseLabel for="customerCity">{{ $t('Ville du Client') }}</BaseLabel>
		<InputText v-model="filters.customerCity" placeholder="Entrez la ville" />
	  </div>

	</div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
  
const filters = ref({
	customerId: "",
	customerName: "",
	customerCity: "",
	registrationDateRange: null,
});
  
const applyFilters = () => {
	console.log(filters.value);
};
  
const { t } = useI18n();
</script>
