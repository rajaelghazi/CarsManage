<template>
	<main class="bg-surface-50">
		<Pattern />

		<Head :title />

		<div class="flex relative flex-col items-center px-5 md:px-auto min-h-screen">
			<Toast position="top-center" />
			<AuthHeader />

			<div class="flex-1 h-full w-full">
				<BaseCard class="w-full p-2 mx-auto sm:max-w-lg" v-bind="$attrs">
					<header>
						<div class="mb-4">
							<slot v-if="$slots.header" name="header"></slot>
							<h1 v-else class="font-bold text-xl">{{ $t(title) }}</h1>
						</div>

						<span class="block w-20 h-0.5 bg-primary mb-5"></span>
					</header>

					<slot></slot>

					<template #footer v-if="$slots.footer">
						<slot name="footer"></slot>
					</template>
				</BaseCard>
			</div>

			<AuthFooter />
		</div>
	</main>
</template>

<script setup>
import {onMounted } from 'vue'
import { Head } from '@inertiajs/vue3';
import { notify } from '@scripts/utils';

import Pattern from './_partials/pattern.vue';
import AuthFooter from './_partials/footer.vue';
import AuthHeader from './_partials/header.vue';

defineProps({ title: String })
defineOptions({ inheritAttrs: false })

onMounted(notify)
</script>