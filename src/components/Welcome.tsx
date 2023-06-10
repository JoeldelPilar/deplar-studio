import logo from '../assets/deplar_Logo_Full.svg';
import '../styles/Welcome.css';
import { BaseButton } from './base/BaseButton';

export const Welcome = () => {
	const handleClick = () => {
		console.log('clicked');
	};

	return (
		<>
			<div>
				<img src={logo} alt='deplar studio logo' width='500' height='50' />
			</div>
			<BaseButton
				name='Continue'
				id='continue'
				onClick={handleClick}
				className='welcomeContinueButton'
			></BaseButton>
		</>
	);
};
