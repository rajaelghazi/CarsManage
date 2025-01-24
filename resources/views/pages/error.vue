<template>
	<ErrorLayout :title="status">
		<img class="mx-auto w-40 mb-6" :src="`/assets/errors/${status}.gif`" alt="">

		<div class="text-center">
			<h1 class="font-bold text-xl mb-3">{{ title }}</h1>
			<p class="text-zinc-500 leading-relaxed w-3/4 mx-auto">{{ description }}</p>
		</div>

		<Link href="" class="block mx-auto mt-6">
			<Button label="Go back" icon="fi fi-rr-arrow-right" icon-pos="right" severity="secondary" outlined class="w-full" />
		</Link>
	</ErrorLayout>
</template>

<script setup>
import { computed } from 'vue'
import { ErrorLayout } from '@views/layouts';

const props = defineProps({ status: Number })

const title = computed(() => {
	return {
		503: 'Service Unavailable',
		500: 'Server Error',
		419: 'Page Expired',
		404: 'Page Not Found',
		403: 'Forbidden',
		401: 'Unauthorized',
	}[props.status]
})

const description = computed(() => {
	return {
		503: 'Sorry, we are doing some maintenance. Please check back soon.',
		500: 'Whoops, something went wrong on our servers.',
		419: 'Sorry, The page has been expired',
		404: 'Sorry, the page you are looking for could not be found.',
		403: 'Sorry, you are forbidden from accessing this page.',
		401: 'Sorry, you are not authenticated to see this page.',
	}[props.status]
})
</script>