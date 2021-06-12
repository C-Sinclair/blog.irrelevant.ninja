export function ifEnter(fn) {
	return event => {
		if (event.key === 'Enter' || event.code === 'Enter') {
			fn(event);
		}
	};
}
