import * as React from 'react';

import Button from './button';

const App: React.FC = () => {
	const handleClick = () => {
		console.log('clicked!');
	};

	return (
		<>
			<h1>React Typescript</h1>
			<Button onClick={handleClick} />
		</>
	);
};

export default App;
