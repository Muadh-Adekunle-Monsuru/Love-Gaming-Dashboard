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
			name: 'John Doe',
			email: 'john.doe@example.com',
			phone: '123-456-7890',
		},
		plan: {
			name: 'Basic Plan',
			price: '9.99',
			monthly: true,
			yearly: false,
		},
		addOns: {
			'Online service': {
				selected: true,
				price: '1.99',
			},
			'Larger storage': {
				selected: false,
				price: '2.99',
			},
			'Customizable profile': {
				selected: true,
				price: '0.99',
			},
		},
		finalPrice: 12.97,
		complete: true,
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
