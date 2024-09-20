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
import link from "../assets/link.svg";
import jsonIcon from "../assets/format-json.svg";
import connectorIcon from "../assets/plugin-connect.svg";
import menuIcon from "../assets/menu-grid.svg";
import postIcon from "../assets/post-sign.svg";
import messengerIcon from "../assets/messenger.svg";
import igIcon from "../assets/instagram-1.svg";
import fbIcon from "../assets/fb-messenger.svg";

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

export const CaptureToolsMenuItems = [
	{ icon: link, text: "Link Library", alt: "Link" },
	{ icon: jsonIcon, text: "JSON Generator", alt: "json-generator" },
	{ icon: connectorIcon, text: "Checkbox Plugin", alt: "connect" },
	{ icon: menuIcon, text: "Menu Plugin", alt: "messenger" },
	{
		icon: postIcon,
		text: "Post Engagement",
		alt: "posts",
		route: "/capture-tools/post-engagements",
	},
	{ icon: messengerIcon, text: "Send To Messenger", alt: "send" },
];

export const postEngagementData = [
	{
		id: 1,
		platformIcon: igIcon,
		name: "Infrastructure",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 2,
		platformIcon: fbIcon,
		name: "Division",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 3,
		platformIcon: igIcon,
		name: "Quality",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 4,
		platformIcon: fbIcon,
		name: "Tactics",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 5,
		platformIcon: fbIcon,
		name: "Security",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 6,
		platformIcon: fbIcon,
		name: "Christ",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 7,
		platformIcon: fbIcon,
		name: "Markets",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 8,
		platformIcon: fbIcon,
		name: "Children",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 9,
		platformIcon: fbIcon,
		name: "Research",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 10,
		platformIcon: fbIcon,
		name: "Accounts",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 11,
		platformIcon: fbIcon,
		name: "Brands",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 12,
		platformIcon: fbIcon,
		name: "Trinity",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 13,
		platformIcon: fbIcon,
		name: "Creation",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 14,
		platformIcon: fbIcon,
		name: "Jesus",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
];
