import classnames from 'classnames'

export default function Badge({ children, color, type }) {
	let colorClass = color && `badge-${color}`
	let typeClass = type && `badge-${type}`
	const allClasses = classnames('badge', colorClass, typeClass)
	return <button className={allClasses}>{children}</button>
}
