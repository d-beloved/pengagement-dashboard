import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../assets/dashboard.svg";
import usersIcon from "../assets/users.svg";
import messageIcon from "../assets/messenger.svg";
import magnetIcon from "../assets/magnet.svg";
import announcementIcon from "../assets/megaphone.svg";
import wandIcon from "../assets/color-wand.svg";
import stackIcon from "../assets/stack.svg";
import graphIcon from "../assets/graph1.svg";
import settingsIcon from "../assets/gear.svg";

const sidebarItems = [
	{ icon: dashboardIcon, text: "Dashboard" },
	{ icon: usersIcon, text: "Users" },
	{ icon: messageIcon, text: "Messages" },
	{
		icon: magnetIcon,
		text: "Magnet",
		route: "/capture-tools/post-engagements",
	},
	{ icon: announcementIcon, text: "Announcements" },
	{ icon: wandIcon, text: "Wand" },
	{ icon: stackIcon, text: "Stack" },
	{ icon: graphIcon, text: "Graph" },
	{ icon: settingsIcon, text: "Settings" },
];

const Sidebar: FunctionComponent = () => {
	return (
		<div className="px-4 pt-8 w-[4.5%] h-full bg-white outline outline-1 outline-slate-200">
			<ul className="flex flex-col gap-8">
				{sidebarItems.map((item) => (
					<li
						className={`w-5 h-5 cursor-pointer self-center hover:bg-slate-400 focus:bg-slate-900`}
					>
						{item.route ? (
							<Link to={item.route}>
								<img src={item.icon} alt={item.text} />
							</Link>
						) : (
							<img src={item.icon} alt={item.text} />
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
