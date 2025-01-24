export default (amount, currency = 'MAD', locale = 'fr-MA') => {
	if (typeof amount == 'string') {
		amount = parseFloat(amount)
	}

	if (currency == 'MAD') {
		return `${amount.toFixed(2)} Dhs`
	}

	return amount.toLocaleString(locale, {
		style: 'currency',
		currency,
	});
}