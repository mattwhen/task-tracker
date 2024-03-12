import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([
		{
			name: 'Adeel Solangi',
			language: 'Sindhi',
			id: 'V59OF92YF627HFY0',
			bio: 'Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.',
			version: 6.1,
			reminder: true,
		},
		{
			name: 'Afzal Ghaffar',
			language: 'Sindhi',
			id: 'ENTOCR13RSCLZ6KU',
			bio: 'Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.',
			version: 1.88,
			reminder: true,
		},
		{
			name: 'Aamir Solangi',
			language: 'Sindhi',
			id: 'IAKPO3R4761JDRVG',
			bio: 'Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.',
			version: 7.27,
			reminder: true,
		},
		{
			name: 'Abla Dilmurat',
			language: 'Uyghur',
			id: '5ZVOEPMJUI4MB4EN',
			bio: 'Donec lobortis eleifend condimentum. Morbi ac tellus erat.',
			version: 2.53,
			reminder: true,
		},
		{
			name: 'Adil Eli',
			language: 'Uyghur',
			id: '6VTI8X6LL0MMPJCC',
			bio: 'Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.',
			version: 6.49,
			reminder: true,
		},
	]);

	// Delete Task
	function deleteTask(id) {
		console.log('deleted', id);
		setTasks(tasks.filter((task) => task.id !== id));
	}

	// Toggle Reminder
	function toggleReminder(id) {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...tasks, reminder: !task.reminder } : task
			)
		);
	}

	return (
		<div className='container'>
			<Header title='Task Tracker' size='100' isTrue={true} />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				<h4>No tasks available!</h4>
			)}{' '}
		</div>
	);
}

export default App;
