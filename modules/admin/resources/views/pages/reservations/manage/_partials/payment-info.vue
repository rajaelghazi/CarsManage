<template>
    <BaseCard title="Informations de paiement">
        <BaseField name="payment_date" class="flex flex-col gap-1 mb-3" :errors="form.errors">
            <BaseLabel for="payment_date">{{ $t('Date de payment') }}</BaseLabel>
            <DatePicker v-model="form.payment_date" dateFormat="dd/mm/yy" showIcon iconDisplay="input" showButtonBar />
        </BaseField>
        
        <BaseField name="method" class="flex flex-col gap-1 mb-3" :errors="form.errors">
            <BaseLabel for="method">{{ $t('Method de payment') }}</BaseLabel>
            <Select v-model="form.payment_method" :options="paymentMethods" option-label="name" option-value="id"
                placeholder="Select a method" />
        </BaseField>
        
        <BaseField v-if="form.payment_method == 3" name="check_number" class="flex flex-col gap-1 mb-3" :errors="form.errors">
            <BaseLabel for="check_number">{{ $t('Check number') }}</BaseLabel>
            <InputGroup>
                <InputText v-model="form.check_number" placeholder="xxxxx" />
                <InputGroupAddon>
                    Dhs
                </InputGroupAddon>
            </InputGroup>
        </BaseField>

        <BaseField name="payment_status" class="flex flex-col gap-1 mb-3" :errors="form.errors">
            <BaseLabel for="payment_status">{{ $t('Status de payment') }}</BaseLabel>
            <Select v-model="form.payment_status" :options="paymentStatus" option-label="name" option-value="id"
                placeholder="Select a status" />
        </BaseField>

        <BaseField v-if="form.payment_status!== 3 && form.payment_status !== 1" name="sub_total" class="flex flex-col gap-1" :errors="form.errors">
            <BaseLabel for="sub_total">{{ $t('Montant HT') }}</BaseLabel>
            <InputGroup>
                <InputText v-model.number="form.sub_total" placeholder="0.00" />
                <InputGroupAddon>
                    Dhs
                </InputGroupAddon>
            </InputGroup>
        </BaseField>

        <div v-if="form.payment_status == 3 && form.payment_status !== 1" class="space-y-3">
            <div v-for="i in partial_payments" :key="i" class="flex items-end gap-1">
                <BaseField :name="`amount_${i}`" class="flex-1 flex flex-col gap-1" :errors="form.errors">
                    <BaseLabel :for="`payment_${1}`">{{ $t(`payment ${i}`) }}</BaseLabel>
                    <InputGroup>
                        <InputText v-model="form[`amount_${i}`]" placeholder="0.00" />
                        <InputGroupAddon>
                            Dhs
                        </InputGroupAddon>
                    </InputGroup>
                </BaseField>
                <Button v-if="partial_payments == i" icon="fi-rr-plus" severity="secondary" @click="partial_payments++" />
                <Button v-if="partial_payments !== i" icon="fi-rr-cross" severity="secondary" @click="partial_payments--" />
            </div>
        </div>
    </BaseCard>
</template>

<script setup>
import { ref } from 'vue';

const form = defineModel();

const partial_payments = ref(1)

const paymentMethods = ref([
    { name: 'Espèces', id: 2 },
    { name: 'Chèque', id: 3 },
    { name: 'Virement bancaire', id: 4 },
])

const paymentStatus = ref([
    { name: 'Non Payé', id: 1 },
    { name: 'Payé', id: 2 },
    { name: 'Partial', id: 3 },
])
</script>