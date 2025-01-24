<template>
    <BaseSection title="Top Véhicules Performants">

        <div class="flex flex-col gap-5">
            <div class="flex lg:flex-row flex-col gap-5">

                <div class="lg:w-1/2 w-full">
                    <BaseCard title="Aperçu des Véhicules" class="w-full">

                        <VehiclesChart />

                    </BaseCard>
                </div>

                <div class="lg:w-1/2 w-full flex flex-col gap-5">

                    <div class="w-full mt-4">
                        <BaseDatatable title="Top 5 Véhicules" :value="vehicles" data-key="id" class="-mt-4">
                            <template #default>
                                <Column field="photo" header="Image">
                                    <template #body="{ data }">
                                        <img :src="`/assets/${data.photo}`" alt="Image du Véhicule"
                                            class=" h-[4.32rem] object-contain rounded" />
                                    </template>
                                </Column>

                                <Column field="brand" header="Identification">
                                    <template #body="{ data }">
                                        <div>
                                            <strong class="dark:text-zinc-300">{{ data.brand }}</strong>
                                            <small class="text-sm block dark:text-zinc-300">{{ data.licencePlate }}</small>
                                        </div>
                                    </template>
                                </Column>

                                <Column header="Toutes">
                                    <template #body="{ data }">
                                        <div>
                                            {{ data.reservationHistory.length }}
                                        </div>
                                    </template>
                                </Column>

                                <Column header="Confirmées">
                                    <template #body="{ data }">
                                        <div>
                                            {{
                                                data.reservationHistory.filter(reservation => reservation.status ===
                                                    'Confirmée').length
                                            }}
                                        </div>
                                    </template>
                                </Column>

                                <Column header="Annulées">
                                    <template #body="{ data }">
                                        <div>
                                            {{
                                                data.reservationHistory.filter(reservation => reservation.status ===
                                                    'Annulée').length
                                            }}
                                        </div>
                                    </template>
                                </Column>

                                <Column header="Montant">
                                    <template #body="{ data }">
                                        <div>
                                            {{
                                                data.reservationHistory
                                                    .filter(reservation => reservation.status === 'Confirmée')
                                                    .reduce((total, reservation) => total + reservation.cost, 0)
                                            }} Dhs
                                        </div>
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
import { ref } from 'vue';
import { MainLayout } from '@admin/views/layouts';
import VehiclesChart from "./VehiclesChart.vue";
import vehiclesData from "../configs/vehicles.js";

const vehicles = ref(vehiclesData);

defineOptions({ layout: MainLayout });
</script>
