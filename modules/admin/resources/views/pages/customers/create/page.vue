<template>
	<BaseDrawerRemote ref="modal" title="Créer un client">
		<template #action>
			<Button label="Enregistrer" @click="save" />
		</template>

		<div class="grid grid-cols-1 md:grid-cols-5 gap-5">

			<div class="col-span-1 md:col-span-2">
				<BaseCard title="Informations personnelles">
					<div class="flex flex-col gap-4">
						<div class="flex flex-col gap-2">
							<BaseLabel for="fullname">{{ $t('Nom complet') }}</BaseLabel>
							<InputText id="fullname" v-model="form.fullname"
								placeholder="Entrez le nom complet du client" />
						</div>

						<div class="flex flex-col gap-2">
							<BaseLabel for="cin">{{ $t('CIN') }}</BaseLabel>
							<InputText id="cin" v-model="form.cin" placeholder="Entrez le CIN du client" />
						</div>

						<div class="flex flex-col gap-2">
							<BaseLabel for="email">{{ $t('Email') }}</BaseLabel>
							<InputText id="email" v-model="form.email" placeholder="Entrez l'email du client" />
						</div>

						<div class="flex flex-col gap-2">
							<BaseLabel for="phone">{{ $t('Téléphone') }}</BaseLabel>
							<InputText id="phone" v-model="form.phone" placeholder="Entrez le téléphone du client" />
						</div>
					</div>
				</BaseCard>
			</div>

			<div class="col-span-1 md:col-span-3">
				<BaseCard title="Détails supplémentaires">

					<div class="flex flex-col gap-4">
						<div class="flex flex-col gap-2">
							<BaseLabel for="date_de_naissance">{{ $t('Date de naissance') }}</BaseLabel>
							<DatePicker id="date_de_naissance" v-model="form.date_de_naissance"
								placeholder="Sélectionnez la date de naissance" format="dd/MM/yyyy" />
						</div>

						<div class="flex flex-col gap-2">
							<BaseLabel for="gender">{{ $t('Genre') }}</BaseLabel>
							<Select id="gender" v-model="form.gender" :options="genderOptions" option-label="label"
								option-value="value" placeholder="Sélectionner le genre" />
						</div>

						<div class="flex flex-col gap-2">
							<BaseLabel for="city">{{ $t('Ville') }}</BaseLabel>
							<InputText id="city" v-model="form.city" placeholder="Entrez la ville du client" />
						</div>

						<div class="flex flex-col gap-2">
							<BaseLabel for="adresse">{{ $t('Adresse') }}</BaseLabel>
							<Textarea id="adresse" v-model="form.adresse" placeholder="Entrez l'adresse du client" />
						</div>

						<div class="flex flex-col gap-2">
							<BaseLabel for="notes">{{ $t('Notes') }}</BaseLabel>
							<Textarea id="notes" v-model="form.notes" class="h-auto"
								placeholder="Entrez des notes concernant le client" />
						</div>
					</div>

				</BaseCard>
			</div>
		</div>
	</BaseDrawerRemote>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import DatePicker from 'primevue/datepicker';

const modal = ref(null);

const form = useForm({
	full_name: '',
	email: '',
	phone: '',
	adresse: '',
	gender: '',
	date_de_naissance: null,
	notes: '',
});

const genders = [
	{ label: 'Homme', value: 'male' },
	{ label: 'Femme', value: 'female' },
];

const save = () => {
	// form.post('/customers/store', {
	// 	onSuccess: () => {
	// 		this.$toast.add({ severity: 'success', summary: 'Succès', detail: 'Client ajouté avec succès.', life: 3000 });
	// 		modal.value.close();
	// 	},
	// });
};
</script>
