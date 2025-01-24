<template>
    <BaseCard title="Informations sur la réservation">
        <div class="flex gap-3">
            <BaseField name="pickup_date" class="flex-1 flex flex-col gap-1 mb-3" :errors="form.errors">
                <BaseLabel for="pickup_date">{{ $t('Date de départ') }}: <span v-if="daysCount > 0">{{ daysCount }} Jours</span> </BaseLabel>
                <DatePicker v-model="form.pickup_date" dateFormat="dd/mm/yy" showIcon iconDisplay="input"
                    showButtonBar />
            </BaseField>
            <BaseField name="dropoff_date" class="flex-1 flex flex-col gap-1 mb-3" :errors="form.errors">
                <BaseLabel for="dropoff_date">{{ $t('Date de Retour') }}: <span v-if="daysCount > 0">{{ daysCount }} Jours</span> </BaseLabel>
                <DatePicker v-model="form.dropoff_date" dateFormat="dd/mm/yy" showIcon iconDisplay="input"
                    showButtonBar />
            </BaseField>
        </div>
        <div class="flex gap-3">
            <BaseField name="pickup_location" class="flex-1 flex flex-col gap-1" :errors="form.errors">
                <BaseLabel for="pickup_location">{{ $t('Départ Location') }}</BaseLabel>
                <Select v-model="form.pickup_location" :options="pickupLocations" option-label="name"
                    placeholder="Select a location" filter />
            </BaseField>
            <BaseField name="dropoff_location" class="flex-1 flex flex-col gap-1" :errors="form.errors">
                <BaseLabel for="dropoff_location">{{ $t('Retour location') }}</BaseLabel>
                <Select v-model="form.dropoff_location" :options="pickupLocations" option-label="name"
                    placeholder="Select a location" filter />
            </BaseField>
        </div>
    </BaseCard>
</template>

<script setup>
import { ref, computed } from 'vue';

const form = defineModel();

const pickupLocations = ref([
    { name: 'Casablanca Mohammed V International Airport', id: 1 },
    { name: 'Marrakech Menara Airport', id: 2 },
    { name: 'Tangier Ibn Battouta Airport', id: 3 },
    { name: 'Rabat-Salé Airport', id: 4 },
    { name: 'Agadir Al Massira Airport', id: 5 },
    { name: 'Fez Saïss Airport', id: 6 },
    { name: 'Casablanca City Center', id: 7 },
    { name: 'Marrakech City Center', id: 8 },
    { name: 'Tangier City Center', id: 9 },
    { name: 'Rabat City Center', id: 10 },
    { name: 'Agadir City Center', id: 11 },
    { name: 'Fez City Center', id: 12 },
])

const daysCount = computed(() => {
    const dates = form.value.dates;

    // Ensure both dates are selected
    if (dates && dates[0] && dates[1]) {
        const startDate = new Date(dates[0]);
        const endDate = new Date(dates[1]);

        // Calculate the difference in milliseconds
        const diffTime = endDate - startDate;

        // Convert to days (milliseconds in a day: 1000 * 60 * 60 * 24)
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // Return 0 if the range is incomplete
    return 0;
});


</script>