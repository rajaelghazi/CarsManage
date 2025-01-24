import { ref } from "vue"

export default () => {
    const instance = ref(null)

    const initialize = (publicKey) => {
        instance.value = new window.YCPay(publicKey, {
            locale: "en",
            isSandbox: true,
            formContainer: '#ycp-form',
            errorContainer: "#ycp-error",
            customCSS:
                ".creditCard-textField-container,.main-container {box-shadow: none !important; border-color: rgb(227 227 227) !important}.main-container{border: none !important; padding: 0 !important}.creditCard-textField-container > img {left: 12px !important; opacity: 0.5}",
        })

        instance.value.renderCreditCardForm()
    }

	const pay = (token) => {
		return new Promise((resolve, reject) => {
			instance.value.pay(token)
				.then(resolve)
				.catch(reject)
		})
	}

	return {
        initialize,
		pay
	}
}
