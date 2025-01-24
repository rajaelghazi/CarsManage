<template>
	<BaseModal v-model="createAddress" title="Transfer ownership">
		<template #action>
			<Button label="Transfer" size="small"/>
		</template>

		<BaseCard>
			<div class="mb-6 space-y-4">
				<ul class="list-inside list-disc ml-1 text-sm">
					<li>{{ $t('The new owner will take control over the business') }}</li>
					<li>{{ $t('Your role will be change from admin to staff') }}</li>
				</ul>
			</div>

			<Form @submit="onSubmit" class="flex flex-col gap-4">
				<h2 class="font-bold">{{ $t('New owner') }}</h2>
				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Email') }}</label>
						<InputText v-model="form.first_name" type="email" id="first_name" fluid />
					</div>

					<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
						{{ form.errors.first_name }}
					</Message>
				</FormField>

				<div class="grid md:grid-cols-2 gap-5">
					<FormField name="first_name" class="flex flex-col gap-2">
						<div class="space-y-2">
							<label class="text-sm font-medium" for="first_name">{{ $t('First name') }}</label>
							<InputText v-model="form.first_name" type="email" id="first_name" fluid />
						</div>

						<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
							{{ form.errors.first_name }}
						</Message>
					</FormField>

					<FormField name="first_name" class="flex flex-col gap-2">
						<div class="space-y-2">
							<label class="text-sm font-medium" for="first_name">{{ $t('Last name') }}</label>
							<InputText v-model="form.first_name" type="email" id="first_name" fluid />
						</div>

						<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
							{{ form.errors.first_name }}
						</Message>
					</FormField>
				</div>

				<Divider class="my-2" />

				<FormField name="first_name" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="first_name">{{ $t('Enter your password to confirm') }}</label>
						<InputText v-model="form.first_name" type="email" id="first_name" fluid />
					</div>

					<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
						{{ form.errors.first_name }}
					</Message>
				</FormField>
			</Form>

			<template #footer>
				<p class="text-sm text-zinc-600 dark:text-surface-500 leading-relaxed">
					{{ $t('Transferring may be delayed until the new owner approves the transfer.') }}
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