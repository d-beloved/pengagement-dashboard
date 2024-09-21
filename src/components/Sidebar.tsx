import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../lib/Data";

interface SidebarProps {
	isHamburgerOpen?: boolean;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ isHamburgerOpen }) => {
	const { pathname } = useLocation();

	return (
		<ul
			className={`${isHamburgerOpen ? "menu rounded-t-none" : "hidden lg:menu"}  menu-vertical h-full lg:h-auto rounded-box bg-white w-[4.5rem] max-w-[4.5rem]`}
		>
			{sidebarItems.map((item, index) => {
				const isActive = pathname.includes(item.route!);
				return (
					<li
						key={index}
						className="hover:bg-slate-100 hover:rounded-md"
					>
						<Link
							className={`py-4 ${isActive ? "active" : ""}`}
							to={item.route ? item.route : ""}
							onClick={(e) => !isActive && e.preventDefault()}
						>
							<img
								className={`w-6 h-6 ${isActive ? "invert" : ""} active:invert`}
								src={item.icon}
								alt={item.text}
							/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Sidebar;
