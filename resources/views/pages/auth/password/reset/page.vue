<template>
	<AuthLayout title="Reset your password">
		<Form @submit="form.post($route('password.reset.update'))" class="flex flex-col gap-7">
			<input type="hidden" v-model="form.token" />

			<div class="space-y-3">
				<FormField name="email" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="email">{{ $t('Email') }}</label>
						<InputText disabled v-model="form.email" type="email" id="email" fluid />
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

				<FormField name="password_confirmation" class="flex flex-col gap-2">
					<div class="space-y-2">
						<label class="text-sm font-medium" for="confirm">{{ $t('Confirm password') }}</label>
						<Password v-model="form.password_confirmation" id="confirm" :feedback="false" toggleMask fluid />
					</div>

					<Message v-if="form.errors?.password_confirmation" severity="error" size="small" variant="simple">
						{{ form.errors.password_confirmation }}
					</Message>
				</FormField>
			</div>

			<Button :loading="form.processing" type="submit" :label="$t('Reset password')" />
		</Form>

		<template #footer>
			<Link :href="$route('login')" class="flex items-center gap-3">
				<i class="fi fi-rr-arrow-left text-sm"></i>
				<span>{{ $t('Back to login') }}</span>
			</Link>
		</template>
	</AuthLayout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { AuthLayout } from "@views/layouts";

const props = defineProps({
	token: String,
	email: String,
});

const form = useForm({
	token: props.token,
	email: props.email,
	password: null,
	password_confirmation: null,
});
</script>
