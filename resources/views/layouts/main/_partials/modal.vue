<template>
    <BaseModal v-model="isModalVisible" title="Vérifier la disponibilité des véhicules">

        <template #default>
            <div class="grid items-start gap-5">
                <div class=" space-y-5">
                    <BaseCard>
                        <div class="flex flex-col w-full gap-2">
                            <BaseLabel for="plageDeDates">{{ $t('Plage de dates') }}</BaseLabel>
                            <div class="flex items-center gap-2 w-full">
                                <DatePicker v-model="plageDeDates" selectionMode="range"
                                    placeholder="Sélectionnez une plage de dates" class="w-4/5" />
                                <Button label="Rechercher" class="px-2 w-auto" @click="rechercherVehicules" />
                            </div>
                        </div>
                    </BaseCard>


                    <div v-if="vehicules.length > 0" class="w-full">
                        <BaseLabel for="vehiculesDisponibles" class="mb-2">{{ $t('Véhicules disponibles :') }}</BaseLabel>

                        <div v-for="vehicule in vehicules" :key="vehicule.id" class="py-2 ">
                            <BaseCard class="flex items-center gap-2 w-full ">
                                <img :src="vehicule.photo" alt="Image du véhicule" class=" h-[4.2rem] object-contain" />
                                <div class="flex flex-row items-center justify-between ">
                                    <div class="flex flex-col gap-2 ">
                                        <div>
                                            <p class="font-semibold">{{ vehicule.brand }} -
                                                <span dir="rtl" class=" font-medium">{{
                                                    vehicule.licencePlate }}</span>
                                            </p>
                                        </div>

                                        <div>Disponible du <span class=" font-medium">{{ vehicule.entryDate }}</span> au
                                            <span class=" font-medium">{{ vehicule.registrationExpiryDate }}</span>
                                        </div>

                                    </div>
                                </div>
                            </BaseCard>

                        </div>
                    </div>

                    <div v-else>Aucun véhicule trouvé dans cette plage de dates.</div>

                </div>
            </div>
        </template>
    </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import { vehicles as tousLesVehicules } from "./vehicles";

const isModalVisible = ref(false);
const plageDeDates = ref(null);
const vehicules = ref(tousLesVehicules);

const rechercherVehicules = () => {
    if (!plageDeDates.value || !plageDeDates.value.length) return;

    const [dateDebut, dateFin] = plageDeDates.value;
    vehicules.value = tousLesVehicules.filter(vehicule => {
        const dateEntreeVehicule = new Date(vehicule.entryDate);
        const dateExpirationVehicule = new Date(vehicule.registrationExpiryDate);
        return dateEntreeVehicule <= dateFin && dateExpirationVehicule >= dateDebut;
    });
};

</script>
