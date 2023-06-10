import { IButton } from '../../models/IButton';
import '../../styles/visuallyHidden.css';

export const BaseButton = ({ name, id, className, onClick }: IButton) => {
	const html = (
		<>
			<label htmlFor={id} className={`visually-hidden`}>
				{id}
			</label>
			<button onClick={onClick} id={id} className={className}>
				{name}
			</button>
		</>
	);
	return <>{html}</>;
};
