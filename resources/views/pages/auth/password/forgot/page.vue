<template>
	<AuthLayout title="Forgot your passsword ?">
		<Message v-if="status" severity="success" icon="fi fi-rr-check-circle">
			{{ status }}
		</Message>

		<Form v-else @submit="onSubmit" class="flex flex-col gap-7">
			<FormField  name="email" class="flex flex-col gap-2">
				<div class="space-y-2">
					<label class="text-sm font-medium" for="email">{{ $t('Email') }}</label>
					<InputText v-model="form.email" type="email" id="email" fluid />
				</div>

				<Message v-if="form.errors?.email" severity="error" size="small" variant="simple">
					{{ form.errors.email }}
				</Message>
			</FormField>

			<Button :loading="form.processing" type="submit" :label="$t('Send password reset link')" />
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
	status: String
})

const form = useForm({
	email: null,
});

const onSubmit = () => {
	form.post($route('password.forgot.request'));
};
</script>
