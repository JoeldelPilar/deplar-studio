import { IButton } from '../../models/IButton';
import '../../styles/visuallyHidden.css';

export const BaseButton = ({ name, id, style, onClick }: IButton) => {
	const html = (
		<>
			<label htmlFor={id} className='visually-hidden'>
				{id}
			</label>
			<button onClick={onClick} style={style} id={id}>
				{name}
			</button>
		</>
	);
	return <>{html}</>;
};
