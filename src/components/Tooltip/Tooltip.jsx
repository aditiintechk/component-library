export default function Tooltip({ variant }) {
	return (
		<div className={`tooltip tooltip-${variant}`}>
			<img src='../../../public/archive-icon.svg' alt='' />
			<div>
				<h5>Archive notes</h5>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit
					oluptatum tenetur.
				</p>
			</div>
			<div class={`inverted-triangle ${variant}`}></div>
			<img src='../../../public/x-icon.svg' alt='' />
		</div>
	)
}
