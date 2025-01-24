<template>
    <BaseSection title="Top Localisations Performants">

        <div class="flex flex-col gap-5">
            <div class="flex lg:flex-row flex-col gap-5">

                <div class="lg:w-1/2 w-full">
                    <BaseCard title="Aperçu des Localisations" class="w-full">
                        <LocationsMap />
                    </BaseCard>
                </div>

                <div class="lg:w-1/2 w-full ">

                    <div class="w-full mt-4">
                        <BaseDatatable title="Top 5 Localisations" :value="groupedReservations" data-key="pickup"
                            class="-mt-4">
                            <template #default class="">

                                <Column field="pickup" header="Lieu de Ramassage" class="">
                                    <template #body="{ data }">
                                        <div>
                                            <strong class="dark:text-zinc-300">{{ data.pickup }}</strong>
                                        </div>
                                    </template>
                                </Column>

                                <Column header="Toutes">
                                    <template #body="{ data }">
                                        <div>{{ data.totalReservations }}</div>
                                    </template>
                                </Column>

                                <Column header="Confirmées">
                                    <template #body="{ data }">
                                        <div>{{ data.confirmed }}</div>
                                    </template>
                                </Column>

                                <Column header="Annulées">
                                    <template #body="{ data }">
                                        <div>{{ data.cancelled }}</div>
                                    </template>
                                </Column>

                                <Column header="Total Montant">
                                    <template #body="{ data }">
                                        <div>{{ data.totalAmount.toFixed(2) }} Dhs</div>
                                    </template>
                                </Column>

                            </template>

                            <template #empty>
                                <EmptyState icon="fi-rr-car" title="Aucun Véhicule"
                                    description="Commencez et ajoutez votre premier véhicule">
                                    <Button label="Créer un nouveau véhicule" size="small" severity="secondary"
                                        as="modal-link" :href="$route('admin.vehicle.create')" icon="fi fi-rr-plus"
                                        navigate outlined />
                                </EmptyState>
                            </template>
                        </BaseDatatable>
                    </div>

                </div>
            </div>
        </div>

    </BaseSection>
</template>

<script setup>
import { ref, computed } from 'vue';
import { MainLayout } from '@admin/views/layouts';
import LocationsMap from "./regions-map.vue";
import ReservationsData from "../configs/reservations.js";

const reservations = ref(ReservationsData);

defineOptions({ layout: MainLayout });

const groupedReservations = computed(() => {
    const pickupMap = {};

    reservations.value.forEach(reservation => {
        const pickup = reservation.location.pickup;

        if (!pickupMap[pickup]) {
            pickupMap[pickup] = {
                pickup,
                totalReservations: 0,
                confirmed: 0,
                cancelled: 0,
                totalAmount: 0
            };
        }

        pickupMap[pickup].totalReservations++;
        if (reservation.status === 'Confirmée') {
            pickupMap[pickup].confirmed++;
        } else if (reservation.status === 'Annulée') {
            pickupMap[pickup].cancelled++;
        }

        pickupMap[pickup].totalAmount += reservation.total;
    });

    return Object.values(pickupMap).sort((a, b) => b.totalAmount - a.totalAmount);
});

const totalVehicles = computed(() => reservations.value.length);
const totalConfirmed = computed(() => reservations.value.filter(reservation => reservation.status === 'Confirmée').length);
</script>
