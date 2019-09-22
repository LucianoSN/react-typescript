import * as React from 'react';

import Button from './button';

import './App.css';

const App: React.FC = () => {
	const handleClick = () => {
		console.log('clicked!');
	};

	return (
		<>
			<h1 className="title is-2">React Typescript</h1>
			<Button onClick={handleClick}>Inserir</Button>
		</>
	);
};

export default App;
