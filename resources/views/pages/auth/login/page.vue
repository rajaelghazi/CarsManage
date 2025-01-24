<template>
	<AuthLayout title="Sign in to your account">
		<Form @submit="form.post($route('login.store'))" class="flex flex-col gap-7">
			<div class="space-y-3">
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

				<div class="flex items-center justify-between !mt-5">
					<div class="flex items-center gap-2">
						<FormField class="flex items-center gap-3" name="remember">
							<Checkbox v-model="form.remember" inputId="remember-me" binary/>
							<label for="remember-me">{{ $t('Remember') }}</label>
						</FormField>
					</div>

					<Link class="text-primary font-medium text-sm" :href="$route('password.forgot')">
						{{ $t('Forgot your password?') }}
					</Link>
				</div>
			</div>

			<Button :loading="form.processing" type="submit" :label="$t('Sign in')" />
		</Form>

		<template #footer>
			<p class="flex items-center gap-2">
				<span>{{ $t('New to COD Rocket?') }}</span>
				<Link :href="$route('register')" class="font-semibold flex gap-3 items-center">
					<span>{{ $t('Create account') }}</span>
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
	email: null,
	password: null,
	remember: false
});
</script>