<template>
	<AuthLayout title="New to COD Rocket ?">
		<Form @submit="form.post($route('register.store'))" class="flex flex-col gap-7">
			<div class="space-y-3">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
					<FormField name="first_name" class="flex-1 flex flex-col gap-2">
						<div class="space-y-2">
							<label class="text-sm font-medium" for="first_name">{{ $t('First Name') }}</label>
							<InputText v-model="form.first_name" id="first_name" fluid />
						</div>

						<Message v-if="form.errors?.first_name" severity="error" size="small" variant="simple">
							{{ form.errors.first_name }}
						</Message>
					</FormField>

					<FormField name="last_name" class="flex-1 flex flex-col gap-2">
						<div class="space-y-2">
							<label class="text-sm font-medium" for="last_name">{{ $t('Last Name') }}</label>
							<InputText v-model="form.last_name" id="last_name" fluid />
						</div>

						<Message v-if="form.errors?.last_name" severity="error" size="small" variant="simple">
							{{ form.errors.last_name }}
						</Message>
					</FormField>
				</div>

				<FormField name="phone" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="phone">{{ $t('Phone number') }}</label>
						<BasePhoneNumber v-model="form.phone" id="phone" fluid />
					</div>

					<Message v-if="form.errors?.phone" severity="error" size="small" variant="simple">
						{{ form.errors.phone }}
					</Message>
				</FormField>

				<FormField name="email" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="email">{{ $t('Email') }}</label>
						<InputText v-model="form.email" type="email" id="email" fluid />
					</div>

					<Message v-if="form.errors?.email" severity="error" size="small" variant="simple">
						{{ form.errors.email }}
					</Message>
				</FormField>

				<FormField name="password" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="password">{{ $t('Password') }}</label>
						<Password v-model="form.password" id="password" :feedback="false" toggleMask fluid />
					</div>

					<Message v-if="form.errors?.password" severity="error" size="small" variant="simple">
						{{ form.errors.password }}
					</Message>
				</FormField>
			</div>

			<Button :loading="form.processing" class="w-full" type="submit" :label="$t('Create account')"></Button>
		</Form>

		<template #footer>
			<p class="flex items-center gap-2">
				<span>{{ $t('Already have account ?') }}</span>
				<Link :href="$route('login')" class="font-semibold flex gap-3 items-center">
					<span>{{ $t('Sign in') }}</span>
					<i class="fi fi-rr-arrow-right text-sm"></i>
				</Link>
			</p>
		</template>
	</AuthLayout>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import { AuthLayout } from '@views/layouts';

const form = useForm({
	first_name: null,
	last_name: null,
	phone: null,
	email: null,
	password: null
});
</script>