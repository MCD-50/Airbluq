export const getOptions = (url, method, page) => {
	if (url && method) {
		let options = {
			method: 'POST',
			url: url,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};

		const data = {
			method:method,
			params:{
				page:page
			}
		};

		options['data'] = data;
		return options
	}
	return null;
};
