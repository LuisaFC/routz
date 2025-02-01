import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ThemeContext } from './context/ThemeContext';
import DestinationsList from './page/DestinationsList';

function App() {
	return (
		<ThemeContext defaultTheme="dark" storageKey="vite-ui-theme">
			<Header />
			<DestinationsList />
			{/* 	<Footer /> */}
		</ThemeContext>
	);
}

export default App;
