<template>
	<header class="container relative">
		<div class="absolute top-6 right-3">
			<button class="bg-white/20 text-white rounded-md py-2 px-6 text-sm" type="button" @click="toggle">
				{{ language }}
			</button>

			<Menu class="mt-2" ref="menu" :model="items" :popup="true">
				<template #submenulabel="{ item }">
					<span class="text-xs">{{ item.label }}</span>
				</template>
			</Menu>
		</div>

		<img src="/assets/logo-white.svg" class="h-7 md:h-8 mb-16 mx-auto mt-24 md:mt-36" alt="COD Rocket logo">
	</header>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();

const locale = ref('en');
const language = ref('English')

const items = ref([
	{
		label: 'Choose a language',
		items: [
			{
				label: 'English',
				command: ({ item }) => {
					locale.value = "en"
					language.value = item.label
				}
			},
			{
				label: 'العربية',
				command: ({ item }) => {
					locale.value = "ar"
					language.value = item.label
				}
			}
		]
	}
]);

const toggle = (event) => {
	menu.value.toggle(event);
};
</script>