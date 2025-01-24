export default {
	mounted(el, binding) {
		let content =  binding.value
	 
		let onClick = e => {
			if (! confirm(content)) {
				e.preventDefault()
				e.stopImmediatePropagation()
			}
		}
	 
		el.addEventListener('click', onClick, { capture: true })
	}
}