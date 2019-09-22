import React, { MouseEvent } from 'react';

type DefaultProps = {
	color?: 'blue' | 'green' | 'red';
	type?: 'button' | 'submit';
};

type Props = {
	onClick(e: MouseEvent<HTMLElement>): void;
} & Partial<DefaultProps>;

const defaultProps: DefaultProps = {
	color: 'blue',
	type: 'button',
};

const Button: React.FC<Props> = ({ onClick, color, type }) => {
	return <h2>button</h2>;
};

export default Button;
