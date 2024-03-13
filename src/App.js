import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import Counter from './components/Counter';

function App() {
	// the useState hook provides two things:
	// 1. A state variable to retain the data between renders.
	// 2. A state setter function, to update the variable(state) and trigger React to render the component again.

	// tasks is the state variable, and setTasks is the setter function.
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
	const [count, setCount] = useState(0);
	const [person, setPerson] = useState({
		first: 'John',
		last: 'Smith',
		age: 29,
		hobbies: {
			sports: 'basketball',
			'Video Games': 'Skyrim',
			outdoors: 'Hiking',
		},
	});

	// Old way
	// Why isn't it re-rendering???
	// We need state to for the count variable to LIVE.
	// let count = 0;

	// React State is non-persistent, meaning if the user manually refreshes or leaves the page, we lose our current state.
	// To get around this, you need local storage or a database :)

	// To update a component with new data, two things need to happen:
	// 1. Retain the data between renders.
	// 2. Trigger React to render the component with new data (re-rendering)

	function increment() {
		// console.log(count);
		// count += 1;
		setCount(count + 1);
	}

	function decrement() {
		if (count === 0) return null;
		setCount(count - 1);
	}

	function updateFirst() {
		setPerson({...person, first: 'Matt' });
	}

	// Delete Task
	function deleteTask(id) {
		console.log('deleted', id);
		setTasks(tasks.filter((task) => task.id !== id));
	}

	// Toggle Reminder
	function toggleReminder(id) {
		setTasks(
			tasks.map((task) =>
				task.id === id
					? // NEVER directly modify an object or array in useState.
					  // Instead, you should create a new updated version of the object/array and call your setter function with the new version.
					  { ...task, reminder: !task.reminder, name: 'Hippity Hoppity' }
					: task
			)
		);
	}

	return (
		<div className='container'>
			<h2>Person</h2>
			<p onClick={updateFirst}>{person.first}</p>
			{person.last} {person.age} 
			<h1>Initial count</h1>
			<button onClick={decrement}>-</button>
			<p>The count is:{count} </p>
			<button onClick={increment}>+</button>
			<Header title='Task Tracker' size='100' isTrue={true} />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				<h4>No tasks available!</h4>
			)}
			<Counter count={1}/>
			<Counter count={2}/>
			<Counter count={3}/>
		</div>
	);
}

export default App;
