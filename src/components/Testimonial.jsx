import testimonialImage from '../../public/testimonial-image.jpg'
import quoteIcon from '../../public/quote.svg'

export default function Testimonial() {
	return (
		<div className='testimonial'>
			<img
				className='testimonial-img'
				src={testimonialImage}
				alt='a beautiful black woman sitting confidently wearing a blue dress & a pretty smile'
			/>
			<div>
				<img src={quoteIcon} alt='' />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					urna nulla vitae laoreet augue. Amet feugiat est integer
					dolor auctor adipiscing nunc urna, sit.{' '}
				</p>
				<h5>May Andersons</h5>
				<h6>Workcation, CTO</h6>
			</div>
		</div>
	)
}
