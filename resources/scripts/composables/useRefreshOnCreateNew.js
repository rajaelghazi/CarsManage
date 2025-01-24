import { ref, inject } from 'vue'

export default (props) => {
	const hasCreatedNew = ref(false)

	const modal = inject('modal')

	const createNew = (route) => {
		hasCreatedNew.value = true
		open($route(route), '_blank')
	}
	
	const onShow = () => {
		if (!hasCreatedNew.value) return
	
		hasCreatedNew.value = false
		modal.value.reload(props)
	}

	return {
		createNew,
		onShow
	}
}