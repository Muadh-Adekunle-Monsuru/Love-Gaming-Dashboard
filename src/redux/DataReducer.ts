import { createSlice } from '@reduxjs/toolkit';

interface Data {
	personal: {
		name: string;
		email: string;
		phone: string;
	};
	plan: {
		name: string;
		price: string;
		monthly: boolean;
		yearly: boolean;
	};
	addOns: {
		'Online service': {
			selected: boolean;
			price: string;
		};
		'Larger storage': {
			selected: boolean;
			price: string;
		};
		'Customizable profile': {
			selected: boolean;
			price: string;
		};
	};
	finalPrice: number;
	complete: boolean;
	'__v': number;
	'_id': string;
}

type DataArray = Data[];
const initialState: DataArray = [
	{
		personal: {
			name: '',
			email: '',
			phone: '',
		},
		plan: {
			name: '',
			price: '',
			monthly: false,
			yearly: false,
		},
		addOns: {
			'Online service': {
				selected: false,
				price: '',
			},
			'Larger storage': {
				selected: false,
				price: '',
			},
			'Customizable profile': {
				selected: false,
				price: '',
			},
		},
		finalPrice: 0,
		complete: false,
		'__v': 0,
		'_id': '',
	},
];

const dataSlice = createSlice({
	name: 'rawdata',
	initialState,
	reducers: {
		addData: (state, action) => {
			console.log(state);
			return action.payload;
		},
	},
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
