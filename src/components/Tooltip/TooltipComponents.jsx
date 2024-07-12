import Tooltip from './Tooltip.jsx'

export default function TooltipComponents() {
	return (
		<>
			<div className='bold'>
				<Tooltip variant='black' />
				<Tooltip variant='blue' />
				<Tooltip variant='pink' />
				<Tooltip variant='green' />
			</div>
			<div className='light'>
				<Tooltip variant='white' />
				<Tooltip variant='light-blue' />
				<Tooltip variant='light-pink' />
				<Tooltip variant='light-green' />
			</div>
		</>
	)
}
