<template>
	<BaseModal v-model="createAddress" title="Inviter des personnes">
		<template #action>
			<Button label="Send" size="small"/>
		</template>

		<BaseCard>
			<Form @submit="onSubmit" class="flex flex-col gap-4">
				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Email') }}</label>
						<InputText v-model="form.first_name" type="email" id="first_name" fluid />
					</div>

					<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
						{{ form.errors.first_name }}
					</Message>
				</FormField>
				
				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Default role') }}</label>
						<Select :options="[]" optionLabel="name" placeholder="select a role" fluid />
					</div>

					<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
						{{ form.errors.first_name }}
					</Message>
				</FormField>
			</Form>

			<template #footer>
				<p class="text-sm text-zinc-600 leading-relaxed">
					{{ $t("Le personnel reçoit une invitation à l'espace de travail") }}
				</p>
			</template>
		</BaseCard>
	</BaseModal>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

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