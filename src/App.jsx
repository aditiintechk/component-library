import { useState } from 'react'
import Badge from './components/Badge.jsx'
import Banner from './components/Banner.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {
	// Badge Component
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
		<>
			<div className='badge-container'>
				<h2>Badge Resuable Component</h2>
				<div>{squareBadges}</div>
				<div>{pillBadges}</div>
			</div>

			<div className='banner-container'>
				<h2>Banner Reusable Component</h2>
				<Banner variant='success'>
					<div>
						<img
							className='icon'
							src='../public/check-circle.svg'
							alt='a green circle with a checkmark at the center'
						/>
					</div>
					<div>
						<h3>Congratulations!</h3>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquid pariatur, ipsum similique veniam.
						</h4>
					</div>
				</Banner>

				<Banner variant='attention'>
					<div>
						<img
							className='icon'
							src='../public/exclamation.svg'
							alt='a yellow color exclamation warning sign'
						/>
					</div>
					<div>
						<h3>Attention</h3>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquid pariatur, ipsum similique veniam.
						</h4>
					</div>
				</Banner>

				<Banner variant='failure'>
					<div>
						<img
							className='icon'
							src='../public/x-circle.svg'
							alt='an x mark in a red circle'
						/>
					</div>
					<div>
						<h3>There is a problem with your application</h3>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquid pariatur, ipsum similique veniam.
						</h4>
					</div>
				</Banner>

				<Banner variant='update'>
					<div>
						<img
							className='icon'
							src='../public/update-icon.svg'
							alt='info icon with a blue background in a round shape'
						/>
					</div>
					<div>
						<h3>Update available</h3>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquid pariatur, ipsum similique veniam.
						</h4>
					</div>
				</Banner>
			</div>
			<div className='card-container'>
				<h2>Card Component</h2>
				<Card />
			</div>
		</>
	)
}

export default App
