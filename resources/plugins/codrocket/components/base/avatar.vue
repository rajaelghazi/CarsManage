<template>
	<Avatar :image="avatar" class="rounded-[.6rem] overflow-hidden" v-bind="$attrs" />
</template>

<script setup>
import { computed } from 'vue'
import Avatar from 'primevue/avatar'
import { usePage } from '@inertiajs/vue3';

const { props: { auth } } = usePage()

const props = defineProps({
	label: String,
	image: String
})

const avatar = computed(() => {
	const name = props.label 
	return props.image || `https://ui-avatars.com/api/?name=${name?.replace(' ', '+')}?background=random`
})
</script>