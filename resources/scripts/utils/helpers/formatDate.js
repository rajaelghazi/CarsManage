export default (date = new Date, showTime = false) => {
	if (typeof date == "string") {
		date = new Date(date)
	}

	const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-GB', optionsDate);

	if (showTime) {
		const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: false };
		const formattedTime = date.toLocaleTimeString('en-GB', optionsTime);
	
		return `${formattedDate} ${formattedTime}`;
	}
	
	return formattedDate
}