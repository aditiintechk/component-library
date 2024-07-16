import { useState } from 'react'
import Badge from './components/Badge.jsx'
import Banner from './components/Banner.jsx'
import Card from './components/Card.jsx'
import Testimonial from './components/Testimonial.jsx'
import TooltipComponents from './components/Tooltip/TooltipComponents.jsx'
import './App.css'
import checkCircle from '../public/check-circle.svg'
import exclamation from '../public/exclamation.svg'
import xCircle from '../public/x-circle.svg'
import updateIcon from '../public/update-icon.svg'

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
							src={checkCircle}
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
							src={exclamation}
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
							src={xCircle}
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
							src={updateIcon}
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

			<div className='testimonial-container'>
				<h2>Testimonial Component</h2>
				<Testimonial />
			</div>

			<div className='tooltip-section'>
				<h2>Tooltip Resuable Components</h2>
				<div className='tooltip-container'>
					<TooltipComponents />
				</div>
			</div>

			<footer>
				Project by{' '}
				<a href='https://v2.scrimba.com/home' target='_blank'>
					Scrimba
				</a>{' '}
				| Developed by{' '}
				<a
					href='https://aditiintechk.github.io/social-links/'
					target='_blank'
				>
					@aditiintechk
				</a>
			</footer>
		</>
	)
}

export default App
