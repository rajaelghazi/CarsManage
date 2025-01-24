<template>
    <BaseCard title="Véhicule" class="flex gap-1">
        <BaseField name="vehicles" class="flex-1 flex flex-col gap-1" :errors="form.errors">
            <Select v-model="form.vehicle" :options="vehicles" option-label="name" placeholder="Selecter une vehicule"
                filter>
                <template #option="slotProps">
                    <div class="flex items-center justify-between w-full">
                        <div class="flex gap-3 items-center">
                            <img class="w-12 h-12 rounded-xl object-cover" :src="slotProps.option.image" alt="car image">
                            <div>
                                <p class="font-semibold">{{ slotProps.option.name }}</p>
                                <p dir="rtl" class="text-sm">{{ slotProps.option.matricule }}</p>
                            </div>
                        </div>
                        <Tag :value="slotProps.option.status" :severity="slotProps.option.color"></Tag>
                    </div>
                </template>
            </Select>
        </BaseField>
    </BaseCard>
</template>

<script setup>
import { ref } from 'vue';

const form = defineModel();

const vehicles = ref([
    { name: 'DACIA Duster', id: 5, status: "maintenance", color: "warn", matricule: "33|أ|1995", image: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/duster/hjd-duster/hjd-duster-ph2/hero-zone/dacia-duster-hjd-ph2-hero-zone-001.jpg.ximg.mediumx2.webp/90949ccc37.webp' },
    { name: 'DACIA Sandero', id: 6, status: "disponible", color: "success", matricule: "33|أ|2569", image: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/sandero/sandero-bji/sandero-bji-ph1/edito-2560-x-1440/dacia-sandero-bji-ph1-072.jpg.ximg.large.webp/ea4f64b59e.webp' },
    { name: 'DACIA Logan', id: 7, status: "disponible", color: "success", matricule: "33|أ|326", image: 'https://cdn.group.renault.com/dac/master/dacia-vn/vehicules/logan/lji-logan/logan-lji-ph1/hero-zones/dacia-logan-lji-ph1-hero-zone-001.jpg.ximg.mediumx2.webp/c02aa873fd.webp' },
    { name: 'Toyota Camry', id: 1, status: "réservé", color: "success", matricule: "22|أ|1256", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg/280px-2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg' },
    { name: 'Honda Civic', id: 2, status: "réservé", color: "info", matricule: "1|أ|1233", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg/640px-Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg' },
])
</script>