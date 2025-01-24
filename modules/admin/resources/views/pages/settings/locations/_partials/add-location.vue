<template>
    <BaseModal v-model="createLocation" title="Créer une Localisation">
        <template #action>
            <Button label="Créer" size="small" />
        </template>

        <BaseCard>
            <FormField name="location_name" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="location_name">{{ $t('Nom de la Localisation') }}</label>
                    <InputText id="location_name" fluid />
                </div>
            </FormField>

            <FormField name="address" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="address">{{ $t('Adresse de la Localisation') }}</label>
                    <InputText id="address" fluid />
                </div>
            </FormField>

            <FormField name="status" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex flex-col ">
                    <label class="text-sm font-medium" for="status">{{ $t('Statut') }}</label>
                    <ToggleSwitch 
                        v-model="locationStatus" 
                        class=" " 
                        :true-value="'Actif'" 
                        :false-value="'Inactif'" 
                    />
                </div>
            </FormField>

            <FormField name="frais" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="frais">{{ $t('Frais') }}</label>
                    <InputText id="frais" type="number" step="0.01" placeholder="Entrez les frais" fluid />
                </div>
            </FormField>
        </BaseCard>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue';

const createLocation = defineModel();
const locationStatus = ref('Inactif');
</script>
