import React from 'react';

const Button = ({ color = 'orange', text = 'Placeholder text', onClick }) => {

	return (
		<div>
			<button onClick={onClick} className='btn' style={{ backgroundColor: color }}>
				{text}
			</button>
		</div>
	);
};

export default Button;
