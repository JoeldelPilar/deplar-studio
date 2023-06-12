import { useState } from 'react';
import { Welcome } from './components/Welcome';
import './styles/App.css';

function App() {
	const [entered, setEntered] = useState(false);
	const enterPage = () => {
		setEntered(true);
	};

	return <>{!entered && <Welcome enterPage={enterPage} />}</>;
}

export default App;
