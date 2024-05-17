import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import { ColDef } from 'ag-grid-community';
import UseDelete from '../redux/DeleteRows';

export default function Grid() {
	const reduxRowData = useSelector((state: RootState) => state.rawdata);

	//button to delete record
	const DeleteButton = (props: any) => {
		const { mutate: deleteRow } = UseDelete();

		const handleDelete = () => {
			const rowId = props.data._id;
			deleteRow(rowId);
		};
		return (
			<div className='w-4 pt-3 cursor-pointer' onClick={handleDelete}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
					<path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z' />
				</svg>
			</div>
		);
	};
	// Column Definitions: Defines the columns to be displayed.
	const colDefs = [
		{ field: 'personal.name', headerName: 'Customer Name' },
		{ field: 'personal.email', headerName: 'Email' },
		{ field: 'personal.phone', headerName: 'Phone' },
		{ field: 'plan.name', headerName: 'Plan' },
		{ field: 'plan.monthly', headerName: 'Monthly' },
		{
			field: 'addOns.Online service.selected',
			headerName: 'Online Service',
		},
		{
			field: 'addOns.Larger storage.selected',
			headerName: 'Larger Storage',
		},
		{
			field: 'addOns.Customizable profile.selected',
			headerName: 'Customizable Profile',
		},

		{
			field: 'finalPrice',
			valueFormatter: (p: any) => '$' + p.value.toString(),
		},
		{
			headerName: 'Fufilled',
			cellRenderer: DeleteButton,
		},
	];
	const defaultColDef: ColDef = {
		flex: 1,
	};
	return (
		// wrapping container with theme & size
		<div
			className='ag-theme-quartz' // applying the grid theme
			style={{ height: 400 }} // the grid will fill the size of the parent container
		>
			<AgGridReact
				rowData={reduxRowData}
				columnDefs={colDefs}
				defaultColDef={defaultColDef}
			/>
		</div>
	);
}
