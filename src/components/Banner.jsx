import classnames from 'classnames'

export default function Banner({ children, variant }) {
	const allClasses = classnames('banner', `banner-${variant}`)
	return <div className={allClasses}>{children}</div>
}
