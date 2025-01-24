<template>
    <BaseModal v-model="createLocation" title="Modifier la localisation">
        <template #action>
            <Button label="Modifier" size="small" />
        </template>

        <BaseCard>
            <FormField name="location_name" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="location_name">{{ $t("Nom de la localisation") }}</label>
                    <InputText id="location_name" value="Aéroport Agadir" fluid />
                </div>
            </FormField>

            <FormField name="address" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="address">{{ $t("Adresse de la localisation") }}</label>
                    <InputText id="address" value="Aéroport International Agadir Al-Massira" fluid />
                </div>
            </FormField>

            <FormField name="status" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex flex-col ">
                    <label class="text-sm font-medium" for="status">{{ $t('Statut') }}</label>
                    <ToggleSwitch v-model="locationStatus":true-value="'Actif'" :false-value="'Inactif'" />
                </div>
            </FormField>

            <FormField name="frais" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="frais">{{ $t('Frais') }}</label>
                    <InputText id="frais" type="number" value="23" step="0.01" placeholder="Entrez les frais" fluid />
                </div>
            </FormField>
        </BaseCard>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
const createLocation = defineModel();
const statusOptions = ref([
    { label: 'Actif', value: 'actif' },
    { label: 'Inactif', value: 'inactif' }
]);

const locationStatus = ref('Actif');

</script>
