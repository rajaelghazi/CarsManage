<template>
	<BaseModal v-model="createAddress" title="Modifier l'entreprise">
		<template #action>
			<Button label="Enregistrer" size="small"/>
		</template>

		<BaseCard>
			<Form @submit="onSubmit" class="flex flex-col gap-4">
				<FormField name="first_name" class="space-y-2">
					<label class="text-sm font-medium" for="first_name">{{ $t('Logo') }}</label>
					<BaseFileUpload />
				</FormField>

				<div class="grid md:grid-cols-2 gap-4">
					<FormField name="first_name" class="flex flex-col gap-2">
						<div class="space-y-2">
							<label class="text-sm font-medium" for="first_name">{{ $t('Nom de l\'entreprise') }}</label>
							<InputText v-model="form.first_name" type="email" id="first_name" fluid />
						</div>
	
						<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
							{{ form.errors.first_name }}
						</Message>
					</FormField>
	
					<FormField name="last_name" class="flex flex-col gap-2">
						<div class="space-y-2">
							<label class="text-sm font-medium" for="last_name">{{ $t('Numéro de téléphone') }}</label>
							<BasePhoneNumber v-model="form.last_name" />
						</div>
	
						<Message v-if="form.errors?.last_name" severity="error" size="small" variant="simple">
							{{ form.errors.last_name }}
						</Message>
					</FormField>
				</div>

				<FormField name="phone" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="phone">{{ $t('Email') }}</label>
						<InputText v-model="form.phone" type="email" id="phone" fluid />
					</div>

					<Message v-if="form.errors?.phone" severity="error" size="small" variant="simple">
						{{ form.errors.phone }}
					</Message>
				</FormField>
			</Form>

			<template #footer>
				<p class="text-sm text-zinc-500">{{ $t("Veuillez ne pas partager d'informations personnelles") }}</p>
			</template>
		</BaseCard>
	</BaseModal>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import { BaseUpload } from '@views/components';

const createAddress = defineModel()

const form = useForm({
	first_name: null,
	last_name: null,
	address: null,
	city_id: null,
	phone: null
});

const onSubmit = () => {}
</script>
