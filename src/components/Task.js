import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
	return (
		<div className='task' onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.name}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<p>{task.bio}</p>
		</div>
	);
};

export default Task;
