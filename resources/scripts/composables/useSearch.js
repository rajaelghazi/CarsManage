import debounce from "lodash/debounce"
import { router } from '@inertiajs/vue3'
import { ref, watch } from "vue"

export default (props) => {
    const keyword = ref(null)
	const isSearching = ref(false)
    const current = window.$route().current()

	const performSearch = debounce((value) => {
		router.get(window.$route(current), {
			search: value,
		}, {
			only: props,
			preserveState: true,
			onFinish: () => isSearching.value = false
		})
	}, 400)

    watch(keyword, (value) => {
		isSearching.value = true
		performSearch(value)
	})

    return {
		isSearching,
        keyword,
    }
}
