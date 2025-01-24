<template>
    <BaseSection title="Analyses">

        <div class="flex flex-col gap-5">
            <div class="flex lg:flex-row flex-col gap-5">

                <BaseCard title="Suivi des Statuts de Réservations" class="w-full">

                    <ReservationChart />

                </BaseCard>

                <div class="lg:w-[45%] flex flex-col gap-5">

                    <Card class=" border border-surface shadow-none">
                        <template #content>
                            <div class="flex justify-between items-center py-5 w-full ">
                                <div class="flex justify-between gap-8 w-1/2 px-5 ">
                                    <div class="flex flex-col gap-6">
                                        <span class="text-surface-500 dark:text-surface-400 text-sm">Total des
                                            réservations</span>
                                        <span class="font-bold text-lg">381</span>
                                    </div>
                                </div>
                                <div class="flex justify-between gap-8 w-1/2 px-5 border-l-2 border-gray-300">
                                    <div class="flex flex-col gap-6 w-full">
                                        <div class="flex flex-row justify-between">

                                            <div class="flex text-surface-500 dark:text-surface-400 text-sm">
                                                Ventes Totales
                                            </div>

                                            <div class="flex gap-0 items-center">
                                                <i class="fi fi-rr-arrow-small-down text-red-500"></i>

                                                <div class="text-surface-500 dark:text-surface-400 text-sm">
                                                    100%
                                                </div>
                                            </div>
                                        </div>

                                        <span class="font-bold text-lg">17087
                                            <span class="font-medium text-sm text-gray-500 ">Dhs</span>
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </template>
                    </Card>

                    <div class="grid grid-cols-2 gap-5">
                        <template v-for="(val, i) in value" :key="i">
                            <ProgressCard :data="val" />
                        </template>
                    </div>

                </div>
            </div>

            <div class="flex lg:flex-row flex-col gap-5 w-full">

                <Card class="w-full border border-surface shadow-none ">
                    <template #content>
                        <div class="flex justify-between items-center py-5 w-full ">
                            <div class="flex justify-between gap-8 w-1/2 px-5 ">
                                <div class="flex flex-col gap-6 w-full">
                                    <div class="flex flex-row justify-between">

                                        <div class="flex text-surface-500 dark:text-surface-400 text-sm">
                                            Bénéfice Net
                                        </div>

                                        <div class="flex gap-1 items-center">
                                            <div class="text-surface-500 dark:text-surface-400 text-sm">
                                                34%
                                            </div>

                                            <i class="fi fi-rr-arrow-trend-up text-green-500"></i>

                                        </div>
                                    </div>

                                    <span class="font-bold text-lg">3081
                                        <span class="font-medium text-sm text-gray-500 ">Dhs</span>

                                    </span>
                                </div>
                            </div>
                            <div class="flex justify-between gap-8 w-1/2 px-5 border-l-2 border-gray-300">
                                <div class="flex flex-col gap-6 w-full">

                                    <div class="flex text-surface-500 dark:text-surface-400 text-sm">
                                        Ratio de Bénéfice
                                    </div>

                                    <div class="flex flex-row items-center gap-1">
                                        <i class="fi fi-rr-arrow-small-up text-red-500"></i>

                                        <span class="font-bold text-lg">8%</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
                <div class="flex gap-5 w-full">
                    <template v-for="(val, i) in value2" :key="i">
                        <StatCard :data="val" />
                    </template>
                </div>

            </div>
        </div>

    </BaseSection>
</template>

<script setup>
import { ref } from 'vue';
import { MainLayout } from '@admin/views/layouts';
import ProgressCard from "./ProgressCard.vue";
import StatCard from "./StatCard.vue";
import ReservationChart from "./ReservationChart.vue";

const value = ref([
    { label: 'Confirmée', color1: '#34d399', value: 205, value2: 380 },
    { label: 'Annulée', color1: '#FF4560', value: 50, value2: 380 },
    { label: 'Partiellement Payée', color1: '#c084fc', value: 10, value2: 30 },
    { label: 'Payée Complètement', color1: '#fbbf24', value: 20, value2: 30 },

]);

const value2 = ref([
    { label: 'Dépenses', color1: '#60a5fa', value: 1800, amount: 'Dhs' },
    { label: 'Assurances', color1: '#c084fc', value: 76, amount: '' },

]);

defineOptions({ layout: MainLayout })
</script>
