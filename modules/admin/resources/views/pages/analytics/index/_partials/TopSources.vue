<template>
  <BaseSection title="Top Sources">

    <div class="flex flex-col gap-5">
      <div class="flex lg:flex-row flex-col gap-5">

        <div class="lg:w-1/2 w-full">
          <BaseCard title="Aperçu des Sources" class="w-full">
            <SourcesChart />
          </BaseCard>
        </div>

        <div class="lg:w-1/2 w-full flex flex-col gap-5">

          <div class="w-full mt-4">
            <BaseDatatable title="Top Sources" :value="sourcesData" data-key="id" class="-mt-4">
              <template #default>
                <Column field="name" header="Source">
                  <template #body="{ data }">
                    <div>
                      <strong class="dark:text-zinc-300">{{ data.name }}</strong>
                    </div>
                  </template>
                </Column>

                <Column header="Total Réservations">
                  <template #body="{ data }">
                    <div>
                      {{ data.count }}
                    </div>
                  </template>
                </Column>

                <Column header="Confirmées">
                  <template #body="{ data }">
                    <div>
                      {{ data.confirmed }}
                    </div>
                  </template>
                </Column>

                <Column header="Annulées">
                  <template #body="{ data }">
                    <div>
                      {{ data.cancelled }}
                    </div>
                  </template>
                </Column>
              </template>

              <template #empty>
                <EmptyState icon="fi-rr-database" title="Aucune Source"
                  description="Commencez à ajouter des réservations pour voir les résultats">
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
import SourcesChart from "./SourcesChart.vue";
import ReservationsData from "../configs/reservations";

const sourcesData = ref([
  {
    name: "Facebook",
    count: ReservationsData.filter(reservation => reservation.source === "Facebook").length,
    confirmed: ReservationsData.filter(reservation => reservation.source === "Facebook" && reservation.status === "confirmée").length,
    cancelled: ReservationsData.filter(reservation => reservation.source === "Facebook" && reservation.status === "annullé").length,
  },
  {
    name: "Instagram",
    count: ReservationsData.filter(reservation => reservation.source === "Instagram").length,
    confirmed: ReservationsData.filter(reservation => reservation.source === "Instagram" && reservation.status === "confirmée").length,
    cancelled: ReservationsData.filter(reservation => reservation.source === "Instagram" && reservation.status === "annullé").length,
  },
  {
    name: "Site Web",
    count: ReservationsData.filter(reservation => reservation.source === "Website").length,
    confirmed: ReservationsData.filter(reservation => reservation.source === "Website" && reservation.status === "confirmée").length,
    cancelled: ReservationsData.filter(reservation => reservation.source === "Website" && reservation.status === "annullé").length,
  },
  {
    name: "Google",
    count: ReservationsData.filter(reservation => reservation.source === "Google").length,
    confirmed: ReservationsData.filter(reservation => reservation.source === "Google" && reservation.status === "confirmée").length,
    cancelled: ReservationsData.filter(reservation => reservation.source === "Google" && reservation.status === "annullé").length,
  },
  {
    name: "Autres",
    count: ReservationsData.filter(reservation => reservation.source === "Other").length,
    confirmed: ReservationsData.filter(reservation => reservation.source === "Other" && reservation.status === "confirmée").length,
    cancelled: ReservationsData.filter(reservation => reservation.source === "Other" && reservation.status === "annullé").length,
  },
]);

defineOptions({ layout: MainLayout });
</script>
