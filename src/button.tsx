import React, { MouseEvent } from 'react';

const defaultProps = {
	color: 'is-danger' as 'is-danger' | 'is-success' | 'is-dark',
	type: 'button' as 'button',
};

type DefaultProps = Readonly<typeof defaultProps>;

type Props = {
	onClick(e: MouseEvent<HTMLElement>): void;
} & Partial<DefaultProps>;

const Button: React.FC<Props> = ({ onClick, color, type, children }) => {
	return (
		<>
			<button
				type={type}
				className={`${type} ${color}`}
				onClick={onClick}
			>
				{children}
			</button>
		</>
	);
};

Button.defaultProps = defaultProps;

export default Button;
