function Title(props) {
	return (
		<>
			<i className="fas fa-chevron-left"></i>
			{props.children}
			<i className="fas fa-chevron-right"></i>
		</>
	);
}

export default Title;
