function Links({ text, link, tar }) {
	return (
		<li className="nav-item">
			<a className="nav-link" href={link} target={tar}>
				{text}
			</a>
		</li>
	);
}
export default Links;
