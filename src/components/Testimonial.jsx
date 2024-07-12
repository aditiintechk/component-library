export default function Testimonial() {
	return (
		<div className='testimonial'>
			<img
				className='testimonial-img'
				src='../../public/testimonial-image.jpg'
				alt=''
			/>
			<div>
				<img src='../../public/quote.svg' alt='' />
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
