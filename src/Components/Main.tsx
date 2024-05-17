import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../redux/DataReducer';
import { RootState } from '../redux/store';
import Card from './Card';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Grid from './Grid';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Main() {
	const store = useSelector((state: RootState) => state.rawdata);
	const arcadeCount = store.filter((val) => val.plan.name == 'Arcade');
	const advancedCount = store.filter((val) => val.plan.name == 'Advanced');
	const proCount = store.filter((val) => val.plan.name == 'Pro');
	const dispatch = useDispatch();
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		setEnabled(true);
	}, []);

	const { isPending, isError } = useQuery({
		queryKey: ['rawData'],
		queryFn: () => {
			const toastId = toast.info('Fetching Data', { autoClose: false });
			axios
				.get('https://love-gaming-backend.vercel.app/orders')
				.then((response) => {
					console.log(
						'Response gotten✅, total count: ' + response.data.length
					);
					dispatch(addData(response.data));
					toast.update(toastId, {
						render: 'Data Received',
						autoClose: 300,
						type: 'success',
					});
					return response.data;
				})
				.catch((e) => {
					console.log('error fetching data', e);
					toast.update(toastId, {
						render: 'Error Fetching Data, Try again!',
						autoClose: 3000,
						type: 'error',
					});
					throw e;
				});
		},
		enabled, // Only enable the query when `enabled` is true
	});
	if (isPending) {
		console.log('waiting for response...');
	}
	if (isError) {
		console.log('error getting data ⛔');
	}

	return (
		<section className='p-5 h-full w-full bg-red-50/10 text-marine-blue'>
			<div className='p-1 border-b w-full'>
				<h1 className='font-extrabold text-2xl text-marine-blue'>
					Love Gaming Management Dashboard
				</h1>
				<p className='py-1 text-gray-500'>
					Management dashboard for the{' '}
					<a
						href='https://love-gaming-form.vercel.app/'
						target='_blank'
						className='font-bold text-marine-blue'
					>
						Love Gaming website
					</a>
					, where all created orders can be viewed.
				</p>
			</div>
			<div className='py-3 flex gap-3 items-center'>
				<Card header={'Total Orders'} value={store.length} />
				<Card header={'Arcades:'} value={arcadeCount.length} />
				<Card header={'Advanced:'} value={advancedCount.length} />
				<Card header={'Pro:'} value={proCount.length} />
			</div>
			<div>
				<Grid />
			</div>
			<ToastContainer />
		</section>
	);
}
