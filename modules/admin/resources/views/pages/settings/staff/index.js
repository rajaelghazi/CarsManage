import { defineAsyncComponent } from 'vue';

export default {
	'staff': {
		icon: 'fi-rr-users-alt',
		component: defineAsyncComponent(
			() => import('./index.vue')
		)
	},
}