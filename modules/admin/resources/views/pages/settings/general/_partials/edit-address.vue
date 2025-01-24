<template>
	<BaseModal v-model="createAddress" title="Adresse professionnelle">
		<template #action>
			<Button label="Enregistrer" size="small"/>
		</template>

		<BaseCard>
			<Form @submit="onSubmit" class="flex flex-col gap-4">
				<FormField name="phone" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="phone">{{ $t('Adresse') }}</label>
						<InputText v-model="form.phone" type="email" id="phone" fluid />
					</div>

					<Message v-if="form.errors?.phone" severity="error" size="small" variant="simple">
						{{ form.errors.phone }}
					</Message>
				</FormField>

				<FormField name="phone" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="phone">{{ $t('Appartement, suite, etc.') }}</label>
						<InputText v-model="form.phone" type="email" id="phone" fluid />
					</div>

					<Message v-if="form.errors?.phone" severity="error" size="small" variant="simple">
						{{ form.errors.phone }}
					</Message>
				</FormField>

				<div>
					<FormField name="last_name" class="flex flex-col gap-2">
						<div class="space-y-2">
							<label class="text-sm font-medium" for="last_name">{{ $t('Ville') }}</label>
							<Select v-model="form.first_name" :options="[]" optionLabel="name" placeholder="sélectionner une ville" class="w-full" />
						</div>
	
						<Message v-if="form.errors?.last_name" severity="error" size="small" variant="simple">
							{{ form.errors.last_name }}
						</Message>
					</FormField>
				</div>
			</Form>
		</BaseCard>
	</BaseModal>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';

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
