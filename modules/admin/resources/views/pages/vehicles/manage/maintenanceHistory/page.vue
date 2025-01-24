<template>
    <BaseDrawerRemote ref="modal" title="Historique de maintenance">
        <BaseSection title="Historique de maintenance">

            <Timeline :value="maintenanceHistory" class=" lg:w-[85%] md:w-[70%] w-full "> 
                <template #opposite="slotProps" >
                    <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
                </template>
                <template #content="slotProps" class="">
                    <p class=" rounded-xl shadow-md p-4 mb-20 bg-gray-50 ">
                        {{ slotProps.item.description }}
                    </p>
                </template>
            </Timeline>

        </BaseSection>
    </BaseDrawerRemote>
</template>

<script setup>
import { ref } from 'vue';
import { vehicles } from '../../index/configs/vehicles'

const maintenanceHistory = ref([
    {
        date: '2022-06-20',
        description: "Changement d'huile pour améliorer la performance du moteur et garantir une bonne lubrification des composants internes. Un huile moteur de haute qualité a été utilisée pour assurer la longévité du moteur."
    },
    {
        date: '2023-04-15',
        description: "Révision complète des freins, y compris le remplacement des plaquettes et le contrôle des disques pour s'assurer que le système de freinage est en parfait état de fonctionnement et garantir la sécurité du véhicule."
    },
    {
        date: '2024-01-10',
        description: "Remplacement des pneus pour des pneus neufs, garantissant une meilleure adhérence à la route, une conduite plus sûre, et une performance optimale. Les pneus ont été choisis en fonction des conditions météorologiques et de la conduite."
    },
]);
</script>