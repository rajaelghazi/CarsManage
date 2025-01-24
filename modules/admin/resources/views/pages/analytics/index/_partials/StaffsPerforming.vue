<template>
    <BaseSection title="Top Employés Performants">

        <div class="flex flex-col gap-5">
            <div class="flex lg:flex-row flex-col gap-5">

                <div class="lg:w-1/2 w-full">
                    <BaseCard title="Aperçu des Employés" class="w-full">

                        <StaffsChart />

                    </BaseCard>
                </div>

                <div class="lg:w-1/2 w-full flex flex-col gap-5">

                    <div class="w-full mt-4">
                        <BaseDatatable title="Top 5 Employés" :value="staffs" data-key="id" class="-mt-4">
                            <template #default>
                                <Column field="fullname" header="Nom">
                                    <template #body="{ data }">
                                        <div>
                                            <strong class="dark:text-zinc-300">{{ data.fullname }}</strong>
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
                                                data.reservationHistory.filter(reservation => reservation.status === 'Confirmée').length
                                            }}
                                        </div>
                                    </template>
                                </Column>

                                <Column header="Annulées">
                                    <template #body="{ data }">
                                        <div>
                                            {{
                                                data.reservationHistory.filter(reservation => reservation.status === 'Annulée').length
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
                                                    .reduce((total, reservation) => total + (reservation.montant || 0), 0)
                                            }} Dhs
                                        </div>
                                    </template>
                                </Column>
                            </template>

                            <template #empty>
                                <EmptyState icon="fi-rr-user" title="Aucun Employé"
                                    description="Commencez et ajoutez votre premier employé">
                                    <Button label="Créer un nouvel employé" size="small" severity="secondary"
                                        as="modal-link" :href="$route('admin.staff.create')" icon="fi fi-rr-plus"
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
import StaffsChart from "./StaffsChart.vue";
import staffsData from "../configs/Staffs.js";

const staffs = ref(staffsData);

defineOptions({ layout: MainLayout });
</script>
