import { defineAsyncComponent } from 'vue';

export default {
	'roles': {
		icon: 'fi-rr-organization-chart',
		component: defineAsyncComponent(
			() => import('./index.vue')
		)
	},
}