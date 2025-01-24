<template>
	<Section title="Notifications">
		<BaseCard title="Emails des Destinataires">
			<div class="grid grid-cols-1 space-y-4">
				<div class="space-y-4">
					<BaseLabel for="entringEmail">{{ $t('Emails des Destinataires') }}</BaseLabel>

					<BaseCard>

						<ul class="p-0">
							<li v-for="(email, index) in recipientEmails" :key="index"
								class="flex justify-between items-center mb-1">
								<span>{{ email }}</span>
								<Button icon="fi fi-rr-trash" @click="removeEmail(index)" severity="danger" size="small"
									aria-label="Supprimer l'email" />
							</li>
						</ul>
					</BaseCard>
				</div>

				<div class="flex flex-col items-start space-y-4">
					<BaseLabel for="entringEmail">{{ $t('Ajouter un nouvel email') }}</BaseLabel>
					<div class="flex items-center gap-2 w-full">
						<InputText v-model="newEmail" placeholder="Entrez un email" class="w-full"
							:aria-label="'Saisir un nouvel email'" />
						<Button icon="fi fi-rr-plus" @click="addEmail" :disabled="!isValidEmail" severity="primary"
							aria-label="Ajouter un email" />
					</div>
				</div>

				<small v-if="newEmail && !isValidEmail" class="text-red-500">
					Email invalide
				</small>

			</div>
		</BaseCard>


		<BaseCard title="Notifications par Email">
			<div class="grid grid-cols-1 gap-2">

				<Fieldset legend="Réservations">
					<div class="flex items-start border-b py-5">
						<div>
							<ToggleSwitch v-model="reservationCreationStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Création de Réservation</span>
								<small>Activez cette option pour recevoir une notification dès qu'une nouvelle
									réservation est effectuée. Cela vous permettra de rester informé en temps
									réel.</small>
							</span>
						</div>
					</div>

					<div class="flex items-start border-b py-5">
						<div>
							<ToggleSwitch v-model="reservationConfirmationStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Confirmation de Réservation</span>
								<small>En activant cette option, vous serez notifié chaque fois qu'une réservation
									nécessitera une confirmation, vous permettant de gérer efficacement les demandes à
									venir.</small>
							</span>
						</div>
					</div>

					<div class="flex items-start py-5">
						<div>
							<ToggleSwitch v-model="upcomingReservationStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Suivi des Réservations</span>
								<small>Cette option vous alertera sur les réservations à venir, ce qui vous aidera à
									éviter tout retard ou conflit dans la planification.</small>
							</span>
						</div>
					</div>
				</Fieldset>

				<Fieldset legend="Assurance & Visites Techniques">
					<div class="flex items-start border-b py-5">
						<div>
							<ToggleSwitch v-model="insuranceRenewalStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Renouvellement d'Assurance</span>
								<small>En activant cette option, vous serez informé des renouvellements d'assurance à
									venir, vous aidant ainsi à anticiper toute action nécessaire.</small>
							</span>
						</div>
					</div>

					<div class="flex items-start py-5">
						<div>
							<ToggleSwitch v-model="technicalVisitsStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Visites Techniques</span>
								<small>Recevez une alerte tous les 6 mois pour vous rappeler les visites techniques
									programmées, assurant un suivi rigoureux pour maintenir votre équipement en parfait
									état.</small>
							</span>
						</div>
					</div>
				</Fieldset>

				<Fieldset legend="Notifications de Gestion et Suivi">
					<div class="flex items-start border-b py-5">
						<div>
							<ToggleSwitch v-model="vehicleReservationStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Réservation d'un Véhicule</span>
								<small>En activant cette option, vous recevrez une notification chaque fois qu'une
									réservation de véhicule sera effectuée, vous permettant ainsi de suivre les
									disponibilités en temps réel.</small>
							</span>
						</div>
					</div>

					<div class="flex items-start border-b py-5">
						<div>
							<ToggleSwitch v-model="pickupStatus" :true-value="'Actif'" :false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Notifications de Récupération</span>
								<small>Recevez des alertes sur les récupérations de véhicules planifiées pour vous aider
									à gérer efficacement ces événements à venir.</small>
							</span>
						</div>
					</div>

					<div class="flex items-start py-5">
						<div>
							<ToggleSwitch v-model="deliveryStatus" :true-value="'Actif'" :false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Livraisons programmées</span>
								<small>Cette option vous permettra de recevoir des rappels pour toutes les livraisons
									planifiées, vous aidant à suivre et organiser les prochaines étapes.</small>
							</span>
						</div>
					</div>
				</Fieldset>

				<Fieldset legend="Engagement Client">
					<div class="flex items-start border-b py-5">
						<div>
							<ToggleSwitch v-model="clientBirthdaysStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Anniversaires des Clients</span>
								<small>Recevez une notification pour vous rappeler les anniversaires des clients à venir
									afin d'ajouter une touche personnelle à vos interactions.</small>
							</span>
						</div>
					</div>

					<div class="flex items-start py-5">
						<div>
							<ToggleSwitch v-model="reservationContactStatus" :true-value="'Actif'"
								:false-value="'Inactif'" />
						</div>
						<div class="flex items-center justify-between ml-5">
							<span class="inline-flex flex-col items-start">
								<span class="font-bold text-base">Proposer une Opportunité de Contrat pour Clients ayant
									déjà réservé</span>
								<small>Activez cette option pour être alerté lorsqu'un client a réservé l'année
									précédente, vous permettant de lui proposer de nouvelles opportunités de
									contrat.</small>
							</span>
						</div>
					</div>
				</Fieldset>

			</div>
		</BaseCard>


	</Section>
</template>

<script setup>
import { ref, computed } from 'vue';
import Section from '../_shared/section.vue';

const insuranceRenewalStatus = ref(false);
const technicalVisitsStatus = ref(false);
const deliveryStatus = ref(false);
const pickupStatus = ref(false);
const reservationStatus = ref(false);
const clientBirthdaysStatus = ref(false);
const reservationContactStatus = ref(false);

const recipientEmails = ref([
	'example1@mail.com',
	'example2@mail.com',
	'example3@mail.com'
]);

const newEmail = ref('');
const isValidEmail = computed(() => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailPattern.test(newEmail.value);
});

const addEmail = () => {
	if (isValidEmail.value && newEmail.value) {
		recipientEmails.value.push(newEmail.value);
		newEmail.value = '';
	}
};

const removeEmail = (index) => {
	recipientEmails.value.splice(index, 1);
};

</script>

<style lang="postcss">
.p-panel-header {
	@apply bg-zinc-100;
}
</style>
