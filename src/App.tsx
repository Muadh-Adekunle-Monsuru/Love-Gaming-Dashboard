import './App.css';
import Main from './Components/Main';
function App() {
	return (
		<main className='font-ubuntu  h-screen overflow-hidden flex flex-col lg:flex-row'>
			<section className='w-full h-28 lg:w-1/4 lg:h-full bg-green-100 bg-mobile lg:bg-desktop bg-cover bg-no-repeat bg-center rounded-r-xl' />
			<Main />
		</main>
	);
}

export default App;
