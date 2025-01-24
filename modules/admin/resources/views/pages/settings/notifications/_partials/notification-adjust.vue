<template>
    <BaseModal v-model="createNotificationModel" title="Modifier une Notification">
        <template #action>
            <Button label="Modifier la Notification" size="small" />
        </template>

        <BaseCard>
            <FormField name="title" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="title">{{ $t('Titre') }}</label>
                    <InputText id="title" value="Notification pour maintenance" fluid />
                </div>
            </FormField>

            <FormField name="message" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium" for="message">{{ $t('Message') }}</label>
                    <TextArea id="message" rows="4" value="Veuillez noter que la maintenance aura lieu le 30 janvier." fluid />
                </div>
            </FormField>

            <FormField name="clients" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium mr-3" for="clients">{{ $t('Sélectionner les Clients') }}</label>
                    <Dropdown :options="clientsList" option-label="label" option-value="value" v-model="selectedClients"
                        placeholder="Sélectionnez les destinataires" multiple />
                </div>
            </FormField>

            <FormField name="status" class="flex items-end gap-2 mb-5">
                <div class="space-y-2 flex-1">
                    <label class="text-sm font-medium mr-3" for="status">{{ $t('Statut') }}</label>
                    <Dropdown :options="statusOptions" option-label="label"
                    option-value="value" v-model="status" />
                </div>
            </FormField>
        </BaseCard>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue'

const createNotificationModel = defineModel()

const clientsList = ref([{ label: 'Client A', value: 'clientA' }, { label: 'Client B', value: 'clientB' }, { label: 'Client C', value: 'clientC' }])

const selectedClients = ref(['clientA', 'clientB'])


const statusOptions = ref([{ label: 'Actif', value: 'active' }, { label: 'Inactif', value: 'inactive' }])

const status = ref('inactive')
</script>
