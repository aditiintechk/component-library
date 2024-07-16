import imageUrl from '../../public/brand-icon.svg'

export default function Card() {
	return (
		<div className='card'>
			<img
				src={imageUrl}
				alt='an icon with a blue background and an upward arrow with a cloud on its tip in the center'
			/>
			<h3>Easy Deployment</h3>
			<p>
				Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
				Et magna sit morbi lobortis.
			</p>
		</div>
	)
}
