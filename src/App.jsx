// import { useState } from 'react'
import Badge from './components/Badge.jsx'
import './App.css'

function App() {
	let types = ['square', 'pill']
	let colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']
	const squareBadges = colors.map((color) => (
		<Badge key={color} color={color} type={types[0]}>
			Badge
		</Badge>
	))

	const pillBadges = colors.map((color) => (
		<Badge key={color} color={color} type={types[1]}>
			Badge
		</Badge>
	))

	return (
		<div className='badge-container'>
			<h1>Badge Resuable Component</h1>
			<div>{squareBadges}</div>

			<div>{pillBadges}</div>
		</div>
	)
}

export default App
