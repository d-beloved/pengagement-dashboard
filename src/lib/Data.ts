import dashboardIcon from "../assets/dashboard.svg";
import usersIcon from "../assets/users.svg";
import messageIcon from "../assets/messenger.svg";
import magnetIcon from "../assets/magnet.svg";
import announcementIcon from "../assets/megaphone.svg";
import wandIcon from "../assets/color-wand.svg";
import stackIcon from "../assets/stack.svg";
import graphIcon from "../assets/graph1.svg";
import settingsIcon from "../assets/gear.svg";
import shield from "../assets/shield-exclamation.svg";
import darkThemeIcon from "../assets/moon.svg";
import circle from "../assets/circle-pie-chart.svg";

export const sidebarItems = [
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

export const topMenuItems = [
	{ icon: shield, text: "Notifications" },
	{ icon: darkThemeIcon, text: "Page Theme" },
	{ icon: circle, text: "Info" },
];
