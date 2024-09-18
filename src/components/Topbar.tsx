import { FunctionComponent } from "react";
import shield from "../assets/shield-exclamation.svg";
import darkThemeIcon from "../assets/moon.svg";
// import lightThemeIcon from "../assets/light.svg";
import circle from "../assets/circle-pie-chart.svg";

const topMenuItems = [
	{ icon: shield, text: "Notifications" },
	{ icon: darkThemeIcon, text: "Page Theme" },
	{ icon: circle, text: "Info" },
];

const Topbar: FunctionComponent = () => {
	return (
		<nav className="navbar bg-white outline outline-1 outline-slate-200">
			<div className="navbar-start gap-4">
				<div className="text-xl font-extralight text-green-600">
					Pe-Dash
				</div>
				<h3 className="border border-solid px-3 py-1 rounded text-base-100 hover:underline">
					@d-beloved
				</h3>
			</div>
			<div className="navbar-end gap-7">
				{topMenuItems.map((item) => (
					<div className="w-6 h-6">
						<img src={item.icon} alt={item.text} />
					</div>
				))}
				<div className="flex text-center bg-red-500 p-2 rounded-full">
					<p className="font-bold text-white text-md w-6 h-6">A</p>
				</div>
			</div>
		</nav>
	);
};

export default Topbar;
