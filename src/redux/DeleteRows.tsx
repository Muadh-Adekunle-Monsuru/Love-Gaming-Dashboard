import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseDelete() {
	const queryClient = useQueryClient();
	console.log(queryClient);
	return useMutation({
		mutationFn: (id) =>
			axios
				.delete(`https://love-gaming-backend.vercel.app/orders/${id}`)
				.then((response) => console.log(response)),
		onSuccess: () => {
			console.log('deleted successfully');
			queryClient.invalidateQueries({ queryKey: ['rawData'] });
		},
	});
}
