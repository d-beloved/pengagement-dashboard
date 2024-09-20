import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { CaptureToolsMenuItems } from "../../lib/Data";

const CaptureToolsMenu: FunctionComponent = () => {
	const { pathname } = useLocation();

	return (
		<ul className="menu bg-white shadow-md rounded-box w-[17rem] mt-8 h-fit">
			<li className="menu-title text-gray-400">Capture Tools</li>
			{CaptureToolsMenuItems.map((item) => {
				const isActive = pathname.includes(item.route!);
				return (
					<li
						key={item.text}
						className="flex text-primary-content font-light hover:bg-slate-100"
					>
						<Link
							className={`py-2 px-4 ${isActive ? "active !text-white" : ""} active:!text-white`}
							to={item.route ? item.route : ""}
							onClick={(e) => !isActive && e.preventDefault()}
						>
							<img
								className={`w-4 h-4 ${isActive ? "invert" : ""} active:invert`}
								src={item.icon}
								alt={item.alt}
							/>
							{item.text}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default CaptureToolsMenu;
