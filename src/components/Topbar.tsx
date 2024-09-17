import React, { FunctionComponent } from "react";

const Topbar: FunctionComponent = () => {
	return (
		<nav className="navbar bg-white-500">
			<div className="navbar-start">
				<div className="btn btn-ghost">Pe-Dash</div>
				<h3 className="">@pe-dash</h3>
			</div>
			<div className="navbar-end">
				<div></div>
				<div></div>
				<div></div>
				<div className="avatar">A</div>
			</div>
		</nav>
	);
};

export default Topbar;
