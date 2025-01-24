<template>
	<main class="bg-surface-50">
		<Pattern />
		
		<div class="flex relative flex-col items-center px-5 md:px-auto min-h-screen">
			<AppHeader />

			<div class="flex-1 h-full w-full">
				<BaseCard class="w-full p-2 mx-auto sm:max-w-lg" v-bind="$attrs">
					<header>
						<h1 class="font-bold text-xl mb-4">{{ title }}</h1>
						<span class="block w-20 h-0.5 bg-primary mb-5"></span>
					</header>
		
					<slot></slot>
				</BaseCard>
			</div>
	
			<AuthFooter />
		</div>
	</main>
</template>

<script setup>
import Pattern from './_partials/pattern.vue';
import AppHeader from './_partials/header.vue';
import AuthFooter from './_partials/footer.vue';

defineProps({ title: Number })
defineOptions({ inheritAttrs: false })
</script>

<style lang="postcss">
.auth .p-card-footer {
	@apply -mx-7 -mb-2
}
</style>