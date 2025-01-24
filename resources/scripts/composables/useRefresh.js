import { router } from '@inertiajs/vue3'
import { ref } from 'vue'

export default (props) => {
	const isRefreshing = ref(false)

	const refresh = () => {
		isRefreshing.value = true

		router.reload({
			only: props,
			onFinish: () => isRefreshing.value = false
		})
	}

    return {
		refresh,
		isRefreshing
    }
}
