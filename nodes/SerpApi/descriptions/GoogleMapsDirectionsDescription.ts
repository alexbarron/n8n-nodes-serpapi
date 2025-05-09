import type { INodeProperties } from 'n8n-workflow';
import { serpApiFields } from './SerpApiDescription';
import { CountryOptions, LanguageOptions } from './GoogleOptions';

export const googleMapsDirectionsFields: INodeProperties[] = [
	{
		displayName: '`start_addr` Starting point address',
		name: 'start_addr',
		description:
			'Parameter defines the address of the starting point for the direction you want to search. You can use anything that you would use in a regular Google Maps Directions search. Alternatively, you can use start_data_id or start_coords.',
		default: '',
		routing: {
			request: {
				qs: {
					start_addr: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps_directions'],
			},
		},
	},
	{
		displayName: '`end_addr` Ending point address',
		name: 'end_addr',
		description:
			'Parameter defines the address of the ending point for the direction you want to search. You can use anything that you would use in a regular Google Maps Directions search. Alternatively, you can use end_data_id or end_coords.',
		default: '',
		routing: {
			request: {
				qs: {
					end_addr: '={{$value}}',
				},
			},
		},
		type: 'string',
		displayOptions: {
			show: {
				resource: ['google_maps_directions'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: ['google_maps_directions'],
			},
		},
		options: [
			{
				displayName: '`gl` Country',
				name: 'gl',
				description:
					"Parameter defines the country to use for the Google search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France) Head to the Google countries page for a full list of supported Google countries.",
				default: 'us',
				routing: {
					request: {
						qs: {
							gl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: CountryOptions,
			},
			{
				displayName: '`hl` Language',
				name: 'hl',
				description:
					"Parameter defines the language to use for the Google Maps Directions search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French). Head to the Google languages page for a full list of supported Google languages.",
				default: 'en',
				routing: {
					request: {
						qs: {
							hl: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: LanguageOptions,
			},
			{
				displayName: '`travel_mode` Travel mode',
				name: 'travel_mode',
				description: 'Parameter defines the travel mode',
				default: '6',
				routing: {
					request: {
						qs: {
							travel_mode: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Best (Default)',
						value: '6',
					},
					{
						name: 'Driving',
						value: '0',
					},
					{
						name: 'Two-wheeler',
						value: '9',
					},
					{
						name: 'Transit',
						value: '3',
					},
					{
						name: 'Walking',
						value: '2',
					},
					{
						name: 'Cycling',
						value: '1',
					},
					{
						name: 'Flight',
						value: '4',
					},
				],
			},
			{
				displayName: '`start_data_id` Starting point data ID',
				name: 'start_data_id',
				description:
					'Parameter defines the data ID of the starting point for the direction you want to search. Find the data ID of a place using our Google Maps API. Alternatively, you can use start_addr or start_coords.',
				default: '',
				routing: {
					request: {
						qs: {
							start_data_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`end_data_id` Ending point data ID',
				name: 'end_data_id',
				description:
					'Parameter defines the data ID of the ending point for the direction you want to search. Find the data ID of a place using our Google Maps API. Alternatively, you can use end_addr or end_coords.',
				default: '',
				routing: {
					request: {
						qs: {
							end_data_id: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`start_coords` Starting point GPS coordinates',
				name: 'start_coords',
				description:
					'Parameter defines the GPS coordinates of the starting point for the direction you want to search. The format is latitude,longitude. E.g. 30.197471099,-97.66635289. Alternatively, you can use start_addr or start_data_id.',
				default: '',
				routing: {
					request: {
						qs: {
							start_coords: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`end_coords` Ending point GPS coordinates',
				name: 'end_coords',
				description:
					'Parameter defines the GPS coordinates of the ending point for the direction you want to search. The format is latitude,longitude. E.g. 30.197471099,-97.66635289. Alternatively, you can use end_addr or end_data_id.',
				default: '',
				routing: {
					request: {
						qs: {
							end_coords: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`distance_unit` Distance Unit',
				name: 'distance_unit',
				description: 'Parameter defines the displayed distance unit',
				default: '1',
				routing: {
					request: {
						qs: {
							distance_unit: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'miles',
						value: '1',
					},
					{
						name: 'km',
						value: '0',
					},
				],
			},
			{
				displayName: '`avoid` Avoid options',
				name: 'avoid',
				description:
					'Parameter defines avoid options. Available options: highways, tolls, ferries. You can also combine multiple options by joining them with a comma (e.g.: highways,tolls).',
				default: '',
				routing: {
					request: {
						qs: {
							avoid: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`prefer` Perfer options',
				name: 'prefer',
				description:
					'Parameter defines preferred transit options. Available options: bus, subway, train, tram_light_rail. You can also combine multiple options by joining them with a comma (e.g.: subway,train). Parameter works only if travel_mode parameter is set to: 3 (Transit)',
				default: '',
				routing: {
					request: {
						qs: {
							prefer: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			{
				displayName: '`route` Route options',
				name: 'route',
				description: 'Parameter defines route options',
				default: '2',
				routing: {
					request: {
						qs: {
							route: '={{$value}}',
						},
					},
				},
				type: 'options',
				options: [
					{
						name: 'Fewer transfers',
						value: '2',
					},
					{
						name: 'Less walking',
						value: '3',
					},
					{
						name: 'Wheelchair accessible',
						value: '4',
					},
				],
			},
			{
				displayName: '`time` Travel time',
				name: 'time',
				description:
					'Parameter defines the time to travel. Available options: depart_at:xxxxxx - Specifies the departure time where xxxxxx is the timestamp. E.g. depart_at:1698229538 specifies the departure time to 2023-10-25 10:25:38 GMT+0000. arrive_by:xxxxxx - Specifies the arrival time, where xxxxxx is the timestamp. E.g. arrive_by:1698229538 specifies the arrival time to 2023-10-25 10:25:38 GMT+0000. last_available - Takes the last available transit. This option works only if travel_mode parameter is set to: 3 (Transit)',
				default: '',
				routing: {
					request: {
						qs: {
							time: '={{$value}}',
						},
					},
				},
				type: 'string',
			},
			...serpApiFields,
		],
	},
];
