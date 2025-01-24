import { router } from '@inertiajs/vue3'
import { ref, watch } from "vue"

export default (props) => {
	const status = ref(true)
	const isFiltering = ref(false)
    const route = window.$route().current()

	const options = ref([
		{ label: 'Active', value: true },
		{ label: 'Inactive', value: false },
	]);

    watch(status, (value) => {
		isFiltering.value = true

		router.get(window.$route(route), {
			status: value,
		}, {
			only: props,
			preserveState: true,
			onFinish: () => isFiltering.value = false
		})
	})

    return {
		isFiltering,
		options,
		status,
    }
}
