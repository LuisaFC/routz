export interface IDestination {
	name: string;
	state: string;
	city: string;
	country: string;
	locale: {
		lat: string;
		long: string;
	};
}
