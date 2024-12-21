import { Header } from './components/Header';
import { ThemeContext } from './context/ThemeContext';

function App() {
	return (
		<ThemeContext defaultTheme="dark" storageKey="vite-ui-theme">
			<Header />
		</ThemeContext>
	);
}

export default App;
