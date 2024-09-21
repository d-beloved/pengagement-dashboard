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
import angry from "../assets/angry.svg";
import care from "../assets/care.svg";
import haha from "../assets/haha.svg";
import like from "../assets/like.svg";
import love from "../assets/love.svg";
import sad from "../assets/sad.svg";
import wow from "../assets/wow.svg";

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
		name: "Jesus",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 2,
		platformIcon: fbIcon,
		name: "Christ",
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
		platformIcon: igIcon,
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
		platformIcon: igIcon,
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
		platformIcon: igIcon,
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
		platformIcon: igIcon,
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
	{
		id: 15,
		platformIcon: igIcon,
		name: "Hero",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 16,
		platformIcon: igIcon,
		name: "Mantle",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 17,
		platformIcon: fbIcon,
		name: "Lifting",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 18,
		platformIcon: igIcon,
		name: "Loftiness",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 19,
		platformIcon: fbIcon,
		name: "Chadwick",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 20,
		platformIcon: igIcon,
		name: "Treasure",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 21,
		platformIcon: igIcon,
		name: "Musical",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
	{
		id: 22,
		platformIcon: fbIcon,
		name: "Inclination",
		engageMetrics: "50/25",
		acquired: "66",
		conversionData: "10%",
	},
];

export const messageType = [
	{
		value: "flow",
		label: "Flow",
	},
	{
		value: "single_message",
		label: "Single Message",
	},
];

export const flowOptions = [
	{
		value: "",
		label: "Select",
	},
	{
		value: "welcome_message",
		label: "Welcome Message",
	},
	{
		value: "default_reply",
		label: "Default Reply",
	},
];

export const msg = [
	{
		value: "text1",
		label: "Text Card #1",
	},
	{
		value: "text2",
		label: "Text Card #2",
	},
];

export const Icons = [like, love, haha, wow, sad, angry, care];

export const commentType = [
	{
		value: "static",
		label: "Static",
	},
	{
		value: "open_ai",
		label: "Open AI",
	},
];

export const integration = [
	{
		value: "integration1",
		label: "Integration 1",
	},
	{
		value: "integration2",
		label: "Integration 2",
	},
];

export const assistance = [
	{
		value: "assistance1",
		label: "Assistance 1",
	},
	{
		value: "assistance2",
		label: "Assistance 2",
	},
];
