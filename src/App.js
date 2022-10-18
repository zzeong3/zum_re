import './scss/style.scss';

import Secret from './components/Secret';
import Week from './components/Week';

function App() {
	return (
		<>
		
		<h1 className='hidden'>오늘의 주가</h1>
		<Secret />
		<Week />
		
		</>
	);
}

export default App;
