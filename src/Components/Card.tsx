interface CardProps {
	header: string;
	value: number;
}
export default function Card({ header, value }: CardProps) {
	return (
		<div className='px-5 p-2 w-40 border shadow-sm rounded-xl '>
			<h1 className='font-bold text-lg'>{header}</h1>
			<p>{value}</p>
		</div>
	);
}
