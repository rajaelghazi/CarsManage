<template>
    <div class="h-[27rem]">
        <!-- <l-map :zoom="zoom" :center="center" style="height: 100%">
            <l-tile-layer :url="tileUrl" :attribution="tileAttribution" />
            <l-circle v-for="(city, index) in highlightedCities" :key="index" :lat-lng="city.coords"
                :radius="city.count * 50" :color="'#3388ff'" :fill="true" :fill-color="'#3388ff'" :fill-opacity="0.4" />
        </l-map> -->
    </div>
</template>

<script>
import { LMap, LTileLayer, LCircle } from "@vue-leaflet/vue-leaflet";
import { ref, computed } from "vue";
import reservations from "../configs/reservations";

export default {
    components: {
        LMap,
        LTileLayer,
        LCircle,
    },
    setup() {
        const zoom = ref(6);
        const center = ref([31.7917, -7.0926]);
        const tileUrl = ref("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
        const tileAttribution = ref(
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        );

        const highlightedCities = computed(() => {
            const cityCount = {};

            reservations?.forEach((reservation) => {
                const pickupCity = reservation.location?.pickup || "Unknown";
                cityCount[pickupCity] = (cityCount[pickupCity] || 0) + 1;
            });

            const cities = {
                Casablanca: [33.5731, -7.5898],
                Marrakech: [31.6295, -7.9811],
                Rabat: [34.020882, -6.84165],
                Fes: [34.0392, -4.9998],
                Tangier: [35.7743, -5.8025],
                Agadir: [30.4278, -9.5985],
                Meknes: [33.8938, -5.5516],
            };

            return Object.keys(cityCount).map((city) => ({
                name: city,
                coords: cities[city] || [0, 0],
                count: cityCount[city],
            }));
        });


        return {
            zoom,
            center,
            tileUrl,
            tileAttribution,
            highlightedCities,
        };
    },
};
</script>

<style scoped></style>