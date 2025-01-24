<template>
	<vue-tel-input
		mode="national"
		autocomplete="off"
		default-country="MA"
		:onlyCountries="['MA']"
		v-model="phone"
		:enabledFlags="false"
		:dynamic-placeholder="true"
		:disabled-fetching-country="true"
		@keydown="onKeydown"
		@validate="onValidate"
	>
		<template #arrow-icon>
			<i class="fi fi-rr-angle-small-down"></i>
		</template>
	</vue-tel-input>
</template>

<script setup>
import "vue-tel-input/vue-tel-input.css"
import { VueTelInput } from "vue-tel-input"
import { ref } from 'vue'

const model = defineModel()
const phone = ref(model.value)
const isValid = ref(false)

const onKeydown = (ev) => {
    const isBackspace = ev.key === 'Backspace';
    const isDigit = /[\d]/.test(ev.key);
    const isControlKey = ev.ctrlKey;

    if (isBackspace) {
        isValid.value = false;
        return;
    }

    if ((!isDigit && !isControlKey) || isValid.value) {
        ev.preventDefault();
        return;
    }
}

const onValidate = ({ valid, number, formatted }) => {
	model.value = number
	phone.value = formatted
	isValid.value = valid
}
</script>

<style scoped>
.vue-tel-input:focus-within {
	border-color: var(--p-inputtext-focus-border-color);
	box-shadow: none;
}

.vue-tel-input:focus,
.vue-tel-input:hover {
	border-color: var(--p-inputtext-focus-border-color);
	box-shadow: var(--p-inputtext-focus-ring-shadow);
	outline: var(--p-inputtext-focus-ring-width) var(--p-inputtext-focus-ring-style) var(--p-inputtext-focus-ring-color);
	outline-offset: var(--p-inputtext-focus-ring-offset);
}

.vue-tel-input input::placeholder {
	font-size: .93rem !important;
}

.vue-tel-input {
	font-family: inherit;
	font-feature-settings: inherit;
	font-size: 1rem;
	color: var(--p-inputtext-color);
	background: var(--p-inputtext-background);
	padding-block: 0.24rem;
	border: 1px solid var(--p-inputtext-border-color);
	transition: background var(--p-inputtext-transition-duration), color var(--p-inputtext-transition-duration), border-color var(--p-inputtext-transition-duration), outline-color var(--p-inputtext-transition-duration), box-shadow var(--p-inputtext-transition-duration);
	appearance: none;
	border-radius: var(--p-inputtext-border-radius);
	outline-color: transparent;
	box-shadow: var(--p-inputtext-shadow);
}

.vti__dropdown-list {
	width: max-content;
	max-width: 200px;
}

.vti__dropdown-item {
	padding: 5px;
}

.vti__dropdown, .vti__dropdown-list, .vti__dropdown-item{
	@apply dark:bg-surface-900;
}
</style>
