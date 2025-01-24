import { defineAsyncComponent } from 'vue';

export default {
	'general': {
		icon: 'fi-rr-home',
		component: defineAsyncComponent(
			() => import('./index.vue')
		)
	},
}