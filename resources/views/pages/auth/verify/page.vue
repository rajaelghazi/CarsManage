<template>
	<AuthLayout title="Verify your email address">
		<Message v-if="status" severity="success" icon="fi fi-rr-check-circle">
			{{ status }}
		</Message>

		<div v-else class="flex flex-col gap-7">
			<p>{{ $t('Before proceeding, please check your email for a verification link.') }}</p>
			<p>
				{{ $t('If you did not receive the email') }}

				<Link :href="$route('verification.send')" method="post" class="text-primary font-bold">
					{{ $t('Click here') }}
				</Link>

				{{ $t('to request another.') }}
			</p>
		</div>

		<template #footer>
			<Link :href="$route('logout')" method="post" class="flex items-center gap-3">
				<i class="fi fi-rr-exit text-sm"></i>
				<span>{{ $t('Sign out') }}</span>
			</Link>
		</template>
	</AuthLayout>
</template>

<script setup>
import { AuthLayout } from "@views/layouts";

const props = defineProps({
	status: String
});
</script>
