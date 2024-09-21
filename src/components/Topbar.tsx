import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { topMenuItems } from "../lib/Data";
import hamburger from "../assets/hamburger.svg";
import Sidebar from "./Sidebar";

const Topbar: FunctionComponent = () => {
	return (
		<nav className="navbar bg-white outline outline-1 outline-slate-200">
			<div className="navbar-start gap-4 xs:w-1/2 w-5/6">
				<div className="hidden lg:block text-xl font-extralight text-green-600">
					<Link
						className="hover:no-underline"
						to="/capture-tools/post-engagements"
					>
						Pe-Dash
					</Link>
				</div>
				<div className="drawer lg:hidden w-10">
					<input
						id="my-drawer"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-content">
						<label htmlFor="my-drawer">
							<img
								className="ml-2 w-8 h-8"
								src={hamburger}
								alt="menu-drawer"
							/>
						</label>
					</div>
					<div className="drawer-side top-16 z-10">
						<label
							htmlFor="my-drawer"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<Sidebar isHamburgerOpen />
					</div>
				</div>
				<h3 className="border border-solid px-3 py-1 rounded text-base-100 hover:underline">
					@d-beloved
				</h3>
			</div>
			<div className="navbar-end gap-2">
				{topMenuItems.map((item) => (
					<div
						key={item.text}
						className={`hidden md:flex items-center justify-center w-12 h-12 hover:bg-slate-300 ${item.text === "Notifications" && "hover:!bg-red-300"}  hover:rounded-full`}
					>
						<img
							className="w-2/4 h-2/4"
							src={item.icon}
							alt={item.text}
						/>
					</div>
				))}
				<div className="flex text-center bg-themebg p-2 rounded-full hover:outline hover:outline-slate-500 hover:outline-3 cursor-pointer">
					<p className="font-bold text-white text-md w-6 h-6">A</p>
				</div>
			</div>
		</nav>
	);
};

export default Topbar;
